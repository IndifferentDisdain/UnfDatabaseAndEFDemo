/// <reference path="../../typings/toastr/toastr.d.ts" />
module BugsModule {

    export class Store extends Flux.BaseStore {

        static instance = new Store();

        private _bugs = new Array<BugListItem>();

        constructor() {
            super("BugStore_Change");
        }

        public initialize(model: Array<BugListItem>) {
            this._bugs = model;
        }

        public statusChanged(action: StatusChangedAction) {
            var bugToUpdate = this._bugs.findByProp("id", action.bugID).firstOrDefault();

            if (!bugToUpdate) {
                toastr.error("Could not find bug " + action.bugID, "Oops!");
            }

            var oldStatus = bugToUpdate.status;

            bugToUpdate.status = action.newStatus;
            this.emitChange();

            var self = this;

            $.ajax({
                type: 'POST',
                url: '/Bugs/UpdateBugStatus',
                data: {
                    bugID: bugToUpdate.id,
                    newStatus: bugToUpdate.status
                },
                success: function (data) {
                    if (data.success) {
                        toastr.success("Bug updated.", "Horray!");
                    }
                    else {
                        toastr.error(data.message || "Something went wrong.", "Oops!");
                        bugToUpdate.status = oldStatus;
                        self.emitChange();
                    }
                },
                error: function (xhr, text, status) {
                    toastr.error(text, "Oops!");
                    bugToUpdate.status = oldStatus;
                    self.emitChange();
                }
            });
        }

        get bugs(): Array<BugListItem> {
            return this._bugs;
        }

    }

}
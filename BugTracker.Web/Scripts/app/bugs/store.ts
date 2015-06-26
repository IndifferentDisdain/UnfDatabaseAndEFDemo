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

        public addNewBug(action: AddNewBugAction) {
            var self = this;

            $.ajax({
                type: 'POST',
                url: '/Bugs/AddNewBug',
                data: {
                    title: action.title,
                    description: action.description
                },
                dataType: 'json',
                success: function (data) {
                    if (data.success) {
                        self._bugs.unshift({
                            id: data.id,
                            title: action.title,
                            status: BugsModule.Statuses.New
                        });
                        toastr.success('New bug ' + data.id + ' saved!', 'Horray!');
                        self.emitChange();
                    } else {
                        toastr.error(data.message || 'Unable to save new bug.', 'Oops!');
                    }
                },
                error: function (xhr, text, status) {
                    toastr.error(status, 'Oops!');
                }
            });
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
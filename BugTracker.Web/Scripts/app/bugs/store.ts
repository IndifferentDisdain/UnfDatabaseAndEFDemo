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

            bugToUpdate.status = action.newStatus;
            this.emitChange();
        }

        get bugs(): Array<BugListItem> {
            return this._bugs;
        }

    }

}
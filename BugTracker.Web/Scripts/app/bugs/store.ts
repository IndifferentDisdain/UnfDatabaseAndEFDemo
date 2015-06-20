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

        get bugs(): Array<BugListItem> {
            return this._bugs;
        }

    }

}
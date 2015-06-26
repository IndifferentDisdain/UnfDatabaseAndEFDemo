module BugsModule {

    export class StatusChangedAction extends Flux.DispatcherAction {
        constructor(public bugID: number, public newStatus: Statuses) {
            super("statusChanged");
        }
    }

    export class AddNewBugAction extends Flux.DispatcherAction {
        constructor(public title: string, public description: string) {
            super("addNewBug");
        }
    }

}
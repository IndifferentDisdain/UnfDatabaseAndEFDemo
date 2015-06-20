module BugsModule {

    export class StatusChangedAction extends Flux.DispatcherAction {
        constructor(public bugID: number, public newStatus: Statuses) {
            super("statusChanged");
        }
    }

}
module BugsModule {

    export class StatusChangedAction extends Flux.DispatcherAction {
        constructor(public bug: BugListItem, newStatus: Statuses) {
            super("statusChanged");
        }
    }

}
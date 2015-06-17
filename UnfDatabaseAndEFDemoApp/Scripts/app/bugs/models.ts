module BugsModule {

    export enum Statuses {
        New,
        InProgress,
        Completed
    }

    export class BugListItem {
        id: number;
        title: string;
        status: Statuses;
    }

}
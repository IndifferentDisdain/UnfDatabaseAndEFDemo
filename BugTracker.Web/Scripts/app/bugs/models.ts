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

    export class Note {
        id: number;
        bugId: number;
        createdDate: Date;
        text: string;
    }

}
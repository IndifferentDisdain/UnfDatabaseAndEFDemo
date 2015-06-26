/// <reference path="../../typings/toastr/toastr.d.ts" />
module BugsModule {

    export class NotesStore extends Flux.BaseStore {

        static instance = new NotesStore();

        private _notes = new Array<Note>();

        constructor() {
            super("BugNoteStore_Change");
        }

        public initialize(model: Array<Note>) {
            this._notes = model;
        }

        // TODO.JS: addNewNote method

        get notes(): Array<Note> {
            return this._notes;
        }

    }

}
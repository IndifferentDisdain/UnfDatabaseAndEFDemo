/// <reference path="../../typings/toastr/toastr.d.ts" />
module BugsModule {

    export class NotesStore extends Flux.BaseStore {

        static instance = new NotesStore();

        private _notes = new Array<Note>();

        constructor() {
            super("BugNoteStore_Change");
        }

        public initialize(model: Array<any>) {
            model.forEach(note => {
                this._notes.push({
                    id: note.id,
                    text: note.text,
                    createdDate: new Date(note.createdDate),
                    bugId: note.bugId
                });
            });
        }

        // TODO.JS: addNewNote method

        get notes(): Array<Note> {
            return this._notes;
        }

    }

}
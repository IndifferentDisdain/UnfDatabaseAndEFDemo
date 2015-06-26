/// <reference path="../../typings/toastr/toastr.d.ts" />
module BugsModule {

    export class NotesStore extends Flux.BaseStore {

        static instance = new NotesStore();
        private _bugId: number;

        private _notes = new Array<Note>();

        constructor() {
            super("BugNoteStore_Change");
        }

        public initialize(model: any) {
            this._bugId = model.bugId;

            model.notes.forEach(note => {
                this._notes.push({
                    id: note.id,
                    text: note.text,
                    createdDate: new Date(note.createdDate),
                    bugId: note.bugId
                });
            });
        }

        // TODO.JS: addNewNote method
        public addNewNote(action: AddNewNoteAction) {
            var self = this;

            $.ajax({
                type: 'POST',
                url: '/Bugs/AddNewNote',
                data: {
                    bugId: this._bugId,
                    text: action.note
                },
                dataType: 'json',
                success: function (data) {
                    if (data.success) {
                        var newNote = new Note();
                        newNote.id = data.id;
                        newNote.createdDate = new Date();
                        newNote.text = action.note;
                        newNote.bugId = self._bugId;

                        self._notes.unshift(newNote);

                        toastr.success('New note added.', 'Horray!');

                        self.emitChange();
                    } else {
                        toastr.error(data.message || 'Unable to add new note.', 'Oops!');
                    }
                },
                error: function (xhr, text, status) {
                    toastr.error(status, 'Oops!');
                }
            });
        }

        get notes(): Array<Note> {
            return this._notes;
        }

    }

}
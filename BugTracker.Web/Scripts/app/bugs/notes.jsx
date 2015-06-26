var Notes = React.createClass({

    getInitialState: function() {
        var store = BugsModule.NotesStore.instance;
        store.initialize(this.props);

        return {
            notes: store.notes
        };
    },

    componentDidMount: function() {
        BugsModule.NotesStore.instance.addChangeListener(this.onStoreChange);
    },

    componentWillUnmount: function(nextProps, nextState) {
        BugsModule.NotesStore.instance.removeChangeListener(this.onStoreChange);
    },

    onStoreChange: function() {
        var store = BugsModule.NotesStore.instance;
		this.setState({
            notes: store.notes
		});
    },

    onAddNote: function(e) {
        e.preventDefault();

        var newNoteNode = this.refs.newNote.getDOMNode();

		Flux.AppDispatcher.instance.handleViewAction(new BugsModule.AddNewNoteAction(newNoteNode.value));

        newNoteNode.value = '';
        $('#addNoteModal').modal('hide');
    },

    render: function() {
        return (
            <div>
                <button type="button" className="btn btn-success" data-toggle='modal' data-target='#addNoteModal'>Add Note</button>

                <div className='modal modal-fade' id='addNoteModal' tabIndex='-1' role='dialog' aria-labelledby='addNoteModalLabel'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h3 className="modal-title" style={{color: 'black !important'}} id='addNoteModalLabel'>Add Note</h3>
                            </div>
                                <div className='modal-body'>
                                        <div className='form-group'>
                                            <label htmlFor='newNote'>Description</label>
                                            <textarea rows='4' style={{resize: 'vertical'}} name='newNote' id='newNote' ref='newNote' className='form-control' placeholder='Max 500 chars' />
                                        </div>
                                </div>
                                <div className='modal-footer'>
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="buton" onClick={this.onAddNote} className="btn btn-primary">Add</button>
                                </div>
                        </div>
                    </div>
                </div>

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th style={{width: 200}}>Date</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.notes.map(note => {
                            return (
                                <tr key={note.id}>
                                    <td>{note.createdDate.toLocaleDateString() + ' ' + note.createdDate.toLocaleTimeString()}</td>
                                    <td>{note.text}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

});

var NotesFactory = React.createFactory(Notes);

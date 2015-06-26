var Notes = React.createClass({

    getInitialState: function() {
        var store = BugsModule.NotesStore.instance;
        store.initialize(this.props.notes);

        return {
            notes: store.notes
        };
    },

    render: function() {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th style={{width: 150}}>Date</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.notes.map(note => {
                        return (
                            <tr key={note.id}>
                                <td>{note.createdDate.split('T')[0]}</td>
                                <td>{note.text}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }

});

var NotesFactory = React.createFactory(Notes);

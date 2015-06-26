var Bugs = React.createClass({

    getInitialState: function() {
        var store = BugsModule.Store.instance;
        store.initialize(this.props.bugs);

        return {
            bugs: store.bugs
        };
    },

    componentDidMount: function() {
        BugsModule.Store.instance.addChangeListener(this.onStoreChange);
    },

    componentWillUnmount: function(nextProps, nextState) {
        BugsModule.Store.instance.removeChangeListener(this.onStoreChange);
    },

    onStoreChange: function() {
        var store = BugsModule.Store.instance;
		this.setState({
			bugs: store.bugs
		});
    },

    onAddBug: function(e) {
        e.preventDefault();

        var newTitleNode = this.refs.newBugTitle.getDOMNode(),
            newDescriptionNode = this.refs.newBugDescription.getDOMNode();

		Flux.AppDispatcher.instance.handleViewAction(new BugsModule.AddNewBugAction(newTitleNode.value, newDescriptionNode.value));

        newTitleNode.value = '';
        newDescriptionNode.value = '';
        $('#addBugModal').modal('hide');
    },

    onDragStart: function(bugID, event) {
        event.dataTransfer.setData("text/plain", bugID);
    },

    render: function() {
        return (
            <div className='container'>
                <div className='modal modal-fade' id='addBugModal' tabIndex='-1' role='dialog' aria-labelledby='addBugModalLabel'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h3 className="modal-title" style={{color: 'black !important'}} id='addBugModalLabel'>Add Bug</h3>
                            </div>
                                <div className='modal-body'>
                                        <div className='form-group'>
                                            <label htmlFor='newBugTitle'>Title</label>
                                            <input type='text' name='title' id='newBugTitle' className='form-control' ref='newBugTitle' placeholder='Max 140 chars' />
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='newBugDescription'>Description</label>
                                            <textarea rows='4' style={{resize: 'vertical'}} name='description' id='newBugDescription' ref='newBugDescription' className='form-control' placeholder='Max 500 chars' />
                                        </div>
                                </div>
                                <div className='modal-footer'>
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="buton" onClick={this.onAddBug} className="btn btn-primary">Add</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1'>
                        <button className='btn btn-primary btn-lg' type='button' style={{marginTop: 20}} onClick={this.showBugModal} data-toggle='modal' data-target='#addBugModal'>Add Bug</button>
                    </div>
                    <div className='col-md-11'>
                        <h2>Drag a bug to change its status. Click a bug to view its details.</h2>
                    </div>
                </div>
                <div className='row bugs-kanban'>
                    <BugCategory status={0} bugs={this.state.bugs.filter(x => x.status === 0)} onDragStart={this.onDragStart} />
                    <BugCategory status={1} bugs={this.state.bugs.filter(x => x.status === 1)} onDragStart={this.onDragStart} />
                    <BugCategory status={2} bugs={this.state.bugs.filter(x => x.status === 2)} onDragStart={this.onDragStart} />
                </div>
            </div>
        );
    }

});

var BugCategory = React.createClass({

    changeBugStatus: function(bugID, newStatus) {
		Flux.AppDispatcher.instance.handleViewAction(new BugsModule.StatusChangedAction(bugID, newStatus));
    },

    onDrop: function(e) {
        var bugIDToUpdate = parseInt(e.dataTransfer.getData("text/plain"));
        var newStatus = this.props.status;
        this.changeBugStatus(bugIDToUpdate, newStatus);
    },

	onDragOver: function(e) {
		e.preventDefault();
	},

    render: function() {

        var categoryClassName = '',
            categoryTitle = '';

        switch(this.props.status) {
            case 0:
                categoryClassName = 'col-md-4 bugs-new';
                categoryTitle = 'New';
                break;
            case 1:
                categoryClassName = 'col-md-4 bugs-in-progress';
                categoryTitle = 'In Progress';
                break;
            case 2:
                categoryClassName = 'col-md-4 bugs-completed';
                categoryTitle = 'Completed';
                break;
            default:
                break;
        };

        return (
            <div className={categoryClassName} onDragOver={this.onDragOver} onDrop={this.onDrop}>
                <h2>{categoryTitle}</h2>
                <ul>
                    {this.props.bugs.map(bug =>
                        <Bug key={bug.id} title={bug.title} id={bug.id} onDragStart={this.props.onDragStart} />
                    )}
                </ul>
            </div>
        )
    }

})

var Bug = React.createClass({

    render: function() {
        var bugUrl = "/Bugs/Details/" + this.props.id;
        return (
            <li>
                <a href={bugUrl}>
                    <div draggable="true" onDragStart={this.props.onDragStart.bind(null, this.props.id)}>
                        <h4>Bug #: {this.props.id}</h4>
                        <p>{this.props.title}</p>
                    </div>
                </a>
            </li>
        );
    }

});

var BugsFactory = React.createFactory(Bugs);

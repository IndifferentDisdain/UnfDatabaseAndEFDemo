var Bugs = React.createClass({

    getInitialState: function() {
        var store = BugsModule.Store.instance;
        store.initialize(this.props.bugs);

        return {
            bugs: store.bugs
        };
    },

    render: function() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Header</h1>
                    </div>
                </div>
                <div className='row bugs-kanban'>
                    <BugCategory status={0} bugs={this.state.bugs.filter(x => x.status === 0)} />
                    <BugCategory status={1} bugs={this.state.bugs.filter(x => x.status === 1)} />
                    <BugCategory status={2} bugs={this.state.bugs.filter(x => x.status === 2)} />
                </div>
            </div>
        );
    }

});

var BugCategory = React.createClass({

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
            <div className={categoryClassName}>
                <h2>{categoryTitle}</h2>
                <ul>
                    {this.props.bugs.map(bug =>
                        <Bug key={bug.id} title={bug.title} id={bug.id} />
                    )}
                </ul>
            </div>
        )
    }

})

var Bug = React.createClass({

    render: function() {
        return (
            <li>
                <div>
                    <h4>Bug #: {this.props.id}</h4>
                    <p>{this.props.title}</p>
                </div>
            </li>
        );
    }

});

var BugsFactory = React.createFactory(Bugs);

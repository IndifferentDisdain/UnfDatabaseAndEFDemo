var bugs = [
    { id: 1, title: "Sample Bug 1", description: "Sample Description 1", status: 0 },
    { id: 2, title: "Sample Bug 2", description: "Sample Description 2", status: 0 },
    { id: 3, title: "Sample Bug 3", description: "Sample Description 3", status: 0 },
    { id: 4, title: "Sample Bug 4", description: "Sample Description 4", status: 1 },
    { id: 5, title: "Sample Bug 5", description: "Sample Description 5", status: 1 },
    { id: 6, title: "Sample Bug 6", description: "Sample Description 6", status: 1 },
    { id: 7, title: "Sample Bug 7", description: "Sample Description 7", status: 2 },
    { id: 8, title: "Sample Bug 8", description: "Sample Description 8", status: 2 },
    { id: 9, title: "Sample Bug 9", description: "Sample Description 9", status: 2 }
];

var Bugs = React.createClass({

    render: function() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Header</h1>
                    </div>
                </div>
                <div className='row bugs-kanban'>
                    <BugCategory status={0} {...this.props} />
                    <BugCategory status={1} {...this.props} />
                    <BugCategory status={2} {...this.props} />
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
                    {this.props.bugs.filter(x => x.status == this.props.status).map(bug =>
                        <Bug key={bug.id} title={bug.title} id={bug.id} description={bug.description} />
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
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </li>
        );
    }

});

React.render (
    <Bugs bugs={bugs}/>,
    document.getElementById('content')
);

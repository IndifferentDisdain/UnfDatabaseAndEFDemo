# Bug Tracking Application
This app will serve as an example app for the presentation at Univeristy of North Florida on Databases and Entity Framework on 26 July 2015.

## Functionality
- Add new bugs
- Use Drag n' Drop to set bug status (New, In Progress, and Done)
- Add notes to bugs

## Installing
You only have to read this section if you want to run this app locally on your own machine. We'll be running it and going over it in depth during the presentation, and of course you can read the code here on GitHub anytime you want.

### System Requirements
- Windows 7 SP1 or above (sorry, *Nix users)
- .NET Framework 4.5 or above (included in Windows 8 and above, separate install for Windows 7.1)
- Visual Studio 2013 or above (Professional or above will definitely work, Express should work)
- <a>SQL Server 2014 Express or above</a> (https://profile.microsoft.com/RegSysProfileCenter/wizard.aspx?wizid=932d09f6-e2d4-429d-bd3e-834adabc4f8f&lcid=1033, select the option 'with Tools'. I also recommend keeping the default instance name of .\SQLEXPRESS)
- TypeScript 1.4 (sorry, it's a requirement for one of the dependencies https://visualstudiogallery.msdn.microsoft.com/2d42d8dc-e085-45eb-a30b-3f7d50d55304)

### Quick Start
- Click 'Clone in Desktop' to the right.
- Open solution in Visual Studio.
- In the project BugTracker.SqlServer, double-click the file LocalSQLExpress.publish.xml, then click Publish (this assumes your SQL Server instance is name .\SQLEXPRESS; if not, then click 'Edit...' to manually configure). This will get the database set up and some seed data in place.
- Right-click the project BugTracker.Web, then click 'Set as StartUp Project' in the context menu.
- Press F5 to launch the debugger.

## Note to Students
This project uses a few different technologies to which you've likely never been exposed (list is below). However, don't let that throw you; we'll mainly focus on the projects BugTracker.Services.ADO and BugTracker.Services.EF (Entity Framework). These can serve as a reference for you for your senior projects.

### Technologies Used
Again, students please don't let this overwhelm you, but rather use this as a point of reference if you're interested in learning about any of these technologies (and you should!).

#### Client
- HTML5/CSS3/JavaScript
- Bootstrap for UI framework
- ReactJS/ReactJS.NET for interactive views
- jQuery, primarily for AJAX requests (and some of the other frameworks require it)
- Flux for managing view data
- TypeScript for strongly typing JavaScript files
- Toastr for notifications

#### Server
- ASP.NET MVC 5
- Unity for dependency injection
- Command/Query Responsibility Segregation (CQRS)
- ADO.NET
- Entity Framework 6
- SQL Server

var React = require('react'),
	Router = require('react-router'),
	Route = Router.Route,
	NotFoundRoute = Router.NotFoundRoute,
	Redirect = Router.Redirect,
	DefaultRoute = Router.DefaultRoute,
	Home = require('./views/home'),
	About = require('./views/about'),
	Contact = require('./views/contact'),
	Projects = require('./views/projects'),
	NotFound = require('./views/not_found'),
	Project = require('./views/project'),
	AppRoot = require('./views/app_root');
	$ = jQuery = require('jquery');


var routes = (
    <Route handler={AppRoot}>
    	<DefaultRoute handler={Home}/>
    	<Route name="home" handler={Home} />
    	<Route name="about" handler={About} />
    	<Route name="projects" handler={Projects} />
    	<Route path="/projects/:key" handler={Projects} />
    	<Route path="/project/:id" handler={Project} />
    	<Route path="/project/:key/:id" handler={Project} />
    	<Route name="contact" handler={Contact} />
    
    	<Redirect from="/" to="home" />
    	<NotFoundRoute handler={NotFound} />
    </Route> 
);

var initApp = function() { 
	Router.run(routes,  function(Root, State ) { 
		
		//Manage navigation active state
		$('nav li').removeClass('active');
		$('ul.nav a[href="#' + State.path + '"]').parent().addClass('active');

		if(State.path.indexOf('/project') !== -1) {
			$('ul.nav a[href="#/projects"]').parent().addClass('active');	
		}

		React.render(<Root />, document.getElementById('main-container'));	
	});
}

module.exports = initApp;
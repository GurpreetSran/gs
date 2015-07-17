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
	AppRoot = require('./views/app_root');

	//$ = jQuery = require('jquery');

var routes = (
    <Route handler={AppRoot}>
    	<DefaultRoute handler={Home}/>
    	<Route name="home" handler={Home} />
    	<Route name="about" handler={About} />
    	<Route name="projects" handler={Projects} />
    	<Route name="contact" handler={Contact} />

    	<Redirect from="/" to="home" />

    	<NotFoundRoute handler={NotFound} />
    </Route> 
);

var initApp = function() { 
	Router.run(routes,  function(Root, State ) { 
		React.render(<Root />, document.getElementById('main-container'));	
	});
}

module.exports = initApp;
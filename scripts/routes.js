var React = require('react'),
	Router = require('react-router'),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	Home = require('./views/home'),
	About = require('./views/about'),
	Contact = require('./views/contact');

	//$ = jQuery = require('jquery');

var routes = (
    <Route path="/" name="home" handler={Home}>
    	<DefaultRoute handler={Home}/>
    	<Route name="about" handler={About} />
    	<Route name="contact" handler={Contact} />
    </Route> 
);

var initApp = function() { 
	Router.run(routes,  function(Root, State ) { 
		React.render(<Root />, document.getElementById('main-container'));	
	});
}

// React.render(<Contact/>, document.body);

module.exports = initApp;
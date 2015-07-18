var React = require('react'),
	Router = require('react-router'),
	RouteHandler = Router.RouteHandler;

var AppRoot = React.createClass({
  render: function() {
    return(
      <RouteHandler/> 
    ); 
  }
});

module.exports = AppRoot;   


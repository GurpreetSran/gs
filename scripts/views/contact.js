var React = require('react'),
	Router = require('react-router'),
	RouteHandler = Router.RouteHandler;

var Contact = React.createClass({
  render: function() {
    return(
      <div id="main-container" className="jumbotron">
        <h1>Contact</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
      </div>
    ); 
  }
});

module.exports = Contact;   


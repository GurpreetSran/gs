var React = require('react');

var NotFound = React.createClass({
  render: function() {
    return(
      <div className="container">
        <h1>Not Found</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
      </div>
    ); 
  }
});

module.exports = NotFound;   

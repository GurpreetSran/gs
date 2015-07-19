var React = require('react');

var Contact = React.createClass({
  render: function() {
    return(
    	<div className="jumbotron">
	      <div className="container">
	        <h1>Contact</h1>
	        <p>If you have any query, feedback or suggestion, please get in touch.</p>
	        <p>
	        	Send me an Email  <br />
	        	Check out my Linkedin Profile <br />
	        	Check out my Stackoverflow Profile <br />
	        	Tweet Me <br />
	        </p>
	      </div>
	    </div> 
    ); 
  }
});

module.exports = Contact;   


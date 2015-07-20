var React = require('react');

var Contact = React.createClass({
  render: function() {
    return(
    	<div>
	    	<div className="jumbotron">
		      <div className="container">
		        <h1>Contact</h1>
		      </div>
		    </div>
		    <div className="container">
		    	<p>If you have any query, feedback or suggestion, please get in touch.</p>
		        <p className="contact-details">
		        	<a target="_blank" href="mailto:gsran82@gmail.com">
						<span className="glyphicon glyphicon-menu-right">Send an e-mail </span>
					</a>
					<a target="_blank" href="http://careers.stackoverflow.com/gurpreet">
						<span className="glyphicon glyphicon-menu-right">Stackoverflow profile</span>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/gurpreetsran">
						<span className="glyphicon glyphicon-menu-right">Linkedin profile</span>
					</a>
					<a target="_blank" href="https://twitter.com/_gsran">
						<span className="glyphicon glyphicon-menu-right">Twitter</span>
					</a> 
		        </p>
		    </div> 
		</div>
    ); 
  }
});

module.exports = Contact;   


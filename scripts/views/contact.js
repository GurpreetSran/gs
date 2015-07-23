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
		        <ul className="fa-ul">
		       		<li>
		       			<i className="fa-li fa fa-envelope-o fa-2x"></i>
		       		  	Send an <a target="_blank" href="mailto:gsran82@gmail.com">Email</a>
		       		</li>
					<li>
						<i className="fa-li fa fa-linkedin fa-2x"></i>
					  		Connect with me on <a target="_blank" href="https://www.linkedin.com/in/gurpreetsran">LinkedIn</a> to discover common connections
					  	</li>
					<li>
						<i className="fa-li fa fa-spinner fa-stack-overflow fa-2x"></i>
						Visit <a target="_blank" href="http://careers.stackoverflow.com/gurpreet">
		        			StackOverflow
		        		</a> to see my contributions to the programming community
					</li>
					<li>
						<i className="fa-li fa fa-github fa-2x"></i>
						View <a href="https://github.com/GurpreetSran" target="_blank">Github </a> to browse the source code of my open source projects
					</li>
					<li>
						<i className="fa-li fa fa-twitter fa-2x"></i>
						<a target="_blank" href="https://twitter.com/_gsran">Twitter</a>
					</li>
		        </ul>       
		    </div> 
		</div>
    ); 
  }
});

module.exports = Contact;   


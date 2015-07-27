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
		        <ul className="fa-ul contact-details">
		       		<li>
		       			<i className="fa-li fa fa-envelope-o"></i>
		       		  	Send an <a target="_blank" href="mailto:gsran82@gmail.com">Email</a>
		       		</li>
					<li>
						<i className="fa-li fa fa-linkedin"></i>
					  		Connect with me on <a target="_blank" href="https://www.linkedin.com/in/gurpreetsran">LinkedIn</a> to discover common connections
					  	</li>
					<li>
						<i className="fa-li fa fa-spinner fa-stack-overflow"></i>
						Visit <a target="_blank" href="http://careers.stackoverflow.com/gurpreet">
		        			StackOverflow
		        		</a> to see my contributions to the programming community
					</li>
					<li>
						<i className="fa-li fa fa-github"></i>
						View <a href="https://github.com/GurpreetSran" target="_blank">Github </a> to browse the source code of my open source projects
					</li>
					<li>
						<i className="fa-li fa fa-twitter"></i>
						<a target="_blank" href="https://twitter.com/intent/follow?screen_name=_gsran&tw_p=followbutton">Follow @_gsran</a>
					</li>
		        </ul>       
		    </div> 

			<br /><br />
			<div className="text-right container">
				<a className="linkStyle1" href="#/home">
					<i className="fa fa-angle-right"></i><span>Home</span>
				</a>
			</div>
			
		</div>
    ); 
  }
});

module.exports = Contact;   


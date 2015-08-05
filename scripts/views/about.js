var React = require('react');

var About = React.createClass({
  render: function() {
    return(
    	<div className="about">  	
	      <div className="jumbotron">
		      <div className="container">
		        <h1>About</h1>
		      </div>
		    </div> 
		    <div className="container">
		    	<p>A mature professional with excellent organisational skills and an open mind. Decade of experience working with world-class clients and broad educational background. The desire to learn new technologies makes me a flexible engineer to fit into different roles effectively.</p><p>Very keen to develop thick client interactive Single Page Applications. I like to keep myself up-to-date with latest technology and trends which enables me to implement best possible solution according to client’s requirements.</p>
		        <p>Working in an environment gets best out of me where the commitment and excitement to technology is paramount. It also presents perfect opportunity to utilize my technical expertise. Passion to deliver best, desire to learn, and implement cutting-edge technologies always help me to adapt quickly for new challenges.
		        </p>
		    	<hr />
		    </div>
		    <br />
		    <div className="container">
		    	<div className="row">
					<div className="col-md-4">
						<h3>Core Skills</h3>
						<ul className="list-group">
							<li className="list-group-item">OO JavaScript</li>
							<li className="list-group-item">HTML(5)</li>
							<li className="list-group-item">CSS(3)</li>
							<li className="list-group-item">Unit Testing</li>
							<li className="list-group-item">ActionScript 3</li>
							<li className="list-group-item">Flex/Flash Builder</li>
						</ul>
					</div>
					<div className="col-md-4">
						<h3>Libraries/Frameworks</h3>
						<ul className="list-group">
							<li className="list-group-item">jQuery</li>
							<li className="list-group-item">Dojo</li>
							<li className="list-group-item">React</li>
							<li className="list-group-item">Angular</li>
							<li className="list-group-item">Backbone</li>
							<li className="list-group-item">Jasmine and Sinon (BDD)</li>
							<li className="list-group-item">Modernizr</li>
							<li className="list-group-item">Responsive Design, Fluid Grids and Media Queries</li>
						</ul>
					</div>
					<div className="col-md-4">
						<h3>FE Tools</h3>
						<ul className="list-group">
							<li className="list-group-item">Require, Browserify and Webpack</li>
							<li className="list-group-item">NPM</li>
							<li className="list-group-item">Grunt and Gulp</li>
							<li className="list-group-item">Sass and LESS</li>
							<li className="list-group-item">Bower</li>
							<li className="list-group-item">Escenic, MOSS and Kentico CMS</li>
							<li className="list-group-item">Git and SVN</li>
							<li className="list-group-item">Agile Methodologies</li>
							<li className="list-group-item">Jira - Bug tracking tool</li>
						</ul>
					</div>
				</div> 
				<br />
				<div className="text-right">
					<a className="linkStyle1" href="#/projects">
						 <i className="fa fa-angle-right"></i><span>Projects</span>
					</a>
				</div>
		    </div>
		</div>    
    ); 
  }
});

module.exports = About;   

var React = require('react');

var About = React.createClass({
  render: function() {
    return(
    	<div>  	
	      <div className="jumbotron">
		      <div className="container">
		        <h1>About</h1>
		      </div>
		    </div> 
		    <div className="container">
		    	<p>A mature professional with excellent organizational skills and an open mind. About a decade of experience working with world class clients. Broad educational background makes me versatile and flexible enginner to fit into different roles effectively.</p>

		        <p>Love developing bespoke, interactive, responsive, robust, and efficient web systems and like to keep myself up to date with latest technology and trends which enables me to develop best possible product according to client’s requirements.</p>
		        <p>Personally I like to a work in an environment where the commitment and excitement to technology is paramount and presents the opportunities to utilize my technical expertise. Passion to deliver best, desire to learn, and implement cutting edge technologies always help me to adapt quickly for new challenges.</p>
		      	<br />	
		    </div>
		    <div className="container about">
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
							<li className="list-group-item">React</li>
							<li className="list-group-item">Angular</li>
							<li className="list-group-item">Backbone</li>
							<li className="list-group-item">Jasmine/Sinon (BDD)</li>
							<li className="list-group-item">Modernizr</li>
							<li className="list-group-item">Responsive Design/Fluid Grids/Media Queries</li>
						</ul>
					</div>
					<div className="col-md-4">
						<h3>FE Tools</h3>
						<ul className="list-group">
							<li className="list-group-item">NPM</li>
							<li className="list-group-item">Grunt/Gulp</li>
							<li className="list-group-item">Sass & LESS</li>
							<li className="list-group-item">Bower</li>
							<li className="list-group-item">Escenic/MOSS/Kentico CMS</li>
							<li className="list-group-item">Git/SVN</li>
							<li className="list-group-item">Agile Methodologies</li>
							<li className="list-group-item">Jira - Bug tracking tool</li>
						</ul>
					</div>
				</div> 
				<br />
				<p className="text-right">
					<a href="#/projects">
						<span className="glyphicon glyphicon-menu-right">Check out projects&nbsp;&nbsp;&nbsp; </span>
					</a>
				</p>
		    </div>
		</div>    
    ); 
  }
});

module.exports = About;   

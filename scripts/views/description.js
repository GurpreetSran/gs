var React = require('react'),
	projectData = require('./../../projects.json'),
	projects = projectData.projects;

var Description = React.createClass({
	getCurrentProject: function() {
		for( var i =0; i < projects.length; i++) {
			if(projects[i].id == this.props.params.id) {
				return projects[i];
			}
		}
	},  
	render: function() {
		var currentProject = this.getCurrentProject();

		return(
			<div className="jumbotron">
				<div className="container">
					<h1>{currentProject.title}</h1>
					<p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
					
				</div>
			</div>
		); 
	}
});

module.exports = Description;
var React = require('react'),
	projectData = require('./../../projects.json'),
	projects = projectData.projects;

var Project = React.createClass({
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
			<div>
				<div className="jumbotron">
					<div className="container">
						<h1>{currentProject.title}</h1>
					</div>	
				</div>	
				<div className="container">
					<p className="text-center"> <img id="projectImg" src={currentProject.image} alt="Project Image" /></p>
					<br />
					<p dangerouslySetInnerHTML={{__html: currentProject.HTMLdescription}} /> 		
					<br />
					<p>
						<a target="_blank" href={currentProject.link}>
							<span className="glyphicon glyphicon-menu-right">Visit Website </span>
						</a>
					</p>
					<br />
					<p>	
						<h3>Technology Stack</h3>
						<div id="skills">
							{currentProject.keys.map(function(key, i){
								return <span key={i} className="label label-default"> {key} </span>
							})}
						</div>				
					</p>
				</div>
			</div>
		); 
	}
});

module.exports = Project;

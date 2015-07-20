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
						<h3>Skills Used</h3>
						<ul className="list-group">
							{currentProject.keys.map(function(key){
								return <li className="list-group-item"> {key } </li>
							})}
						</ul>
					</p>
				</div>
			</div>
		); 
	}
});

module.exports = Project;

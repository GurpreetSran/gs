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

	getNextProjectId: function() {
		var currentPrj = this.getCurrentProject();
		var nextPrjId;

		if(currentPrj.id == 1) {
			nextPrjId = projects.length; 	
			return nextPrjId;
		} else {
			nextPrjId = currentPrj.id - 1; 
			return nextPrjId;
		}
	},
	
	render: function() {
		var currentProject = this.getCurrentProject(),
			nextProject

		return(
			<div>
				<div className="jumbotron">
					<div className="container">
						<h1>{currentProject.title}</h1>
					</div>	
				</div>	
				<div className="container">
					<p className="text-center eeeBackground"> <img id="projectImg" src={currentProject.image} alt="Project Image" /></p>
					<br />
					<h3>Overview</h3>
					<div dangerouslySetInnerHTML={{__html: currentProject.HTMLdescription}} /> 		
					<div>
						{/* JSX if else condition*/ }
						{(currentProject.link
							? <p id="website-link"><a target="_blank" href={currentProject.link}>
								<i className="fa fa-forward"></i><span>Visit Website </span>
							  </a></p>
							: <br />
						)}
					</div>
					<div>	
						<h3>Technology Stack</h3>
						<div id="skills">
							{currentProject.skills.map(function(key, i){
								return <span key={i} className="label label-default"> {key} </span>
							})}
						</div>				
					</div>
					<div className="text-right">
						<a href={'#/project/'+this.getNextProjectId()}>
							<i className="fa fa-forward"></i><span>Next Project</span>
						</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</div>
				</div>
			</div>
		); 
	}
});

module.exports = Project;

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
					<div dangerouslySetInnerHTML={{__html: currentProject.HTMLdescription}} /> 		
					<p>
						{/* JSX if else condition*/ }
						{(currentProject.link
							? <p id="website-link"><a target="_blank" href={currentProject.link}>
								<span className="glyphicon glyphicon-menu-right">Visit Website </span>
							  </a></p>
							: <br />
						)}
					</p>
					<p>	
						<h3>Technology Stack</h3>
						<div id="skills">
							{currentProject.skills.map(function(key, i){
								return <span key={i} className="label label-default"> {key} </span>
							})}
						</div>				
					</p>
					<p className="text-right">
						<a href={'#/project/'+this.getNextProjectId()}>
							<span className="glyphicon glyphicon-menu-right">Next Project &nbsp;&nbsp;&nbsp;</span>
						</a>
					</p>
				</div>
			</div>
		); 
	}
});

module.exports = Project;

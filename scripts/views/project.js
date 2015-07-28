var React = require('react/addons'),
	ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
	projectsData = require('./../get_projects'),
	projects = projectsData.getProjects();

var Project = React.createClass({
	
	getCurrentProject: function() {
		for( var i =0; i < projects.length; i++) {
			if(projects[i].id == this.props.params.id) {
				return projects[i];
			}
		}
	 	return false;		
	},  

	getNextProjectId: function() {
		var currentPrj = this.getCurrentProject(),
			currentIndex = projects.indexOf(currentPrj);
	
		if(currentIndex === projects.length-1 ) {
			return projects[0].id; 	
		} else {
			return projects[currentIndex + 1].id; 
		}
	},

	render: function() {
		
		var currentProject = this.getCurrentProject(),	
			key =  this.getNextProjectId(); //Hack for force image animation
	
		if(!currentProject) {
			return (
				<div>
					<div className="jumbotron">
						<div className="container">
							<h1 className="error">Navigation Error</h1>
						</div>
					</div>		
					<div className="container">
						<p className="error">
							Invalid project id: {this.props.params.id}
						</p>	
						<br />
						<a className="linkStyle1" href={'#/projects'}>
							<i className="fa fa-angle-right"></i><span>Projects</span>
						</a>
					</div> 
				</div>);
		};	


		return(
			<div className="project-page">
				<div className="jumbotron">
					<div className="container">
						<h1>{currentProject.title}</h1>
					</div>	
				</div>	
				<div className="container ">
					<ReactCSSTransitionGroup transitionName="reactClass" key={key} transitionAppear={true}>
						<div className="project-image-container"> 
							<img src={currentProject.image} alt="Project Image" />
						</div>
					</ReactCSSTransitionGroup>	
					<br />
					<h3>Overview</h3>
					<div className="dynamic-content" dangerouslySetInnerHTML={{__html: currentProject.HTMLdescription}} /> 		
					<div>
						{/* JSX if else condition*/ }
						{(currentProject.link
							? <p id="website-link"><a className="linkStyle1" target="_blank" href={currentProject.link}>
								<i className="fa fa-angle-right"></i><span>Visit Website </span>
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
					<br /> <br />
					<div className="text-right">
						<a className="linkStyle1" href={'#/project/'+this.getNextProjectId()}>
							<i className="fa fa-angle-right"></i><span>Next Project</span>
						</a>
					</div>
				</div>
			</div>
		); 
	}
});

module.exports = Project;

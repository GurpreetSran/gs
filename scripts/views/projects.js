var React = require('react'),
	projectData = require('./../../projects.json'),
	Project = require('./project'),
	projectLength = projectData.projects.length,
	itemsInRow = 3,
	clicked = 0; //Increment this number and rerender this cimponent on click and we are almost done 


var Projects = React.createClass({
	
	render: function() {
		var projectsDOM = 	< div >
							< div className = "jumbotron" >
								< div className = "container" >
									< h1 > Projects < /h1> 
								< /div> 
							< /div>

							< div className = "container" >
								< div className = "row" > 
									{projectData.projects.reverse().map(function(project, i) {
										
											


											if(i < (clicked + 1) * itemsInRow) {
												return <Project id={project.id} />
											}
									})}
								
								< /div> 
								
								<hr/> 

							< /div> 
						< /div>

		return projectsDOM;
	}
});

module.exports = Projects;
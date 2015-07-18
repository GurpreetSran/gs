var React = require('react'),
	projectData = require('./../../projects.json'),
	ProjectsRow = require('./projects_row'),
	itemsInRow = 3,
	projects = projectData.projects.reverse(),
	currentProjects = []; 

var Projects = React.createClass({
	
	getInitialState: function() {
		
		currentProjects = projects.slice(); //Create a copy or array 
		
		return { 
			loadMoreBtn: true,
			rows: [currentProjects.splice(0, itemsInRow)]			
		}
	},

	loadMoreProjects: function(e) {
		e.preventDefault();
		var addRow = this.state.rows;
	
		if(currentProjects.length) {
			addRow.push(currentProjects.splice(0, itemsInRow));
			this.setState({rows: addRow});  
		} 

		if(!currentProjects.length) {
			this.setState({loadMoreBtn: false})
		}
		
	},

	render: function() {

		return (
			< div >
				< div className = "jumbotron" >
					< div className = "container" >
						< h1 > Projects < /h1> 
					< /div> 
				< /div>

				< div className = "container" >
					
					{this.state.rows.map(function(row, i) {
						return <ProjectsRow row={row} key={i} />
					}.bind(this))}
				
				< /div> 

				< div className = "container text-center" >	
					<a  className= {this.state.loadMoreBtn ? 'btn btn-primary btn-lg' : 'hide'} 
						onClick = {this.loadMoreProjects}
						role="button" > Load More Projects </a>
				</div>
			< /div>
		);	
	}
});

module.exports = Projects;
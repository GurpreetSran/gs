var React = require('react'),
	projectData = require('./../../projects.json'),
	ProjectsRow = require('./projects_row'),
	itemsInRow = 3,
	noOfDefaultRows = 2,
	projects = projectData.projects.reverse(),
	currentProjects = [];

var Projects = React.createClass({
	
	getInitialState: function() {
		
		var rows = [];

		currentProjects = projects.slice(); //Create a copy or array 
		
		for (var i = 0; i < noOfDefaultRows; i++) {
			if(currentProjects.length) {
				rows.push(currentProjects.splice(0, itemsInRow));
			} 
		}  

		return { 
			loadMoreBtn: true,
			rows: rows	
		}
	},

	componentDidUpdate: function() {
		//Scroll to bottom of the page after each click
		// $("html, body").animate({
		// 	scrollTop: $(document).height()
		// }, 1000);	
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
					<a id="loadMore" className= {this.state.loadMoreBtn ? 'btn btn-primary' : 'hide'} 
						onClick = {this.loadMoreProjects}
						role="button" > Load More Projects </a>
				</div>
			< /div>
		);	
	}
});

module.exports = Projects;
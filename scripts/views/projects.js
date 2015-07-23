var React = require('react'),
	projectData = require('./../../projects.json'),
	ProjectsRow = require('./projects_row'),
	itemsInRow = 3,
	noOfDefaultRows = 2,
	projects = projectData.projects.reverse(),
	currentProjects = [],
	currentPageRows;

var Projects = React.createClass({
	
	getInitialState: function() {
		
		var rows = [],
			loadMoreIsVisible = true;

		if(!currentPageRows) {
			currentPageRows = noOfDefaultRows;
		}

		currentProjects = projects.slice(); //Create a copy or array 
		
		noOfDefaultRows = currentPageRows || noOfDefaultRows;

		for (var i = 0; i < noOfDefaultRows; i++) {
			if(currentProjects.length) {
				rows.push(currentProjects.splice(0, itemsInRow));
			} 
		}  

		currentProjects.length ? loadMoreIsVisible = true : loadMoreIsVisible = false;
			
		return { 
			loadMoreBtn: loadMoreIsVisible,
			rows: rows	
		}
	},

	loadMoreProjects: function(e) {

		e.preventDefault();
		var addRow = this.state.rows;
	
		if(currentProjects.length) {
			currentPageRows++;
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

				< div className = "container projects" >
					
					{this.state.rows.map(function(row, i) {
						return <ProjectsRow row={row} key={i} />
					}.bind(this))}
				
				< /div> 

				< div className = "container text-center" >	
					<a id="loadMore" className= {this.state.loadMoreBtn ? 'btn btn-primary' : 'hide'} 
						onClick = {this.loadMoreProjects}
						role="button" > Load More Projects 
					</a>
					<br />
					<br />
					<br />
					<br />
					<p className="text-right">
						<a href="#/contact">
							<span className="glyphicon glyphicon-menu-right">Contact me&nbsp;&nbsp;&nbsp; </span>
						</a>
					</p>
				</div>
			< /div>
		);	
	}
});

module.exports = Projects;
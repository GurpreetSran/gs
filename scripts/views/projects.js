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
					<a id="loadMore" className= {this.state.loadMoreBtn ? 'linkStyle1' : 'hide'} 
						onClick = {this.loadMoreProjects}
						role="button" > <i className="fa fa-chevron-down">Load More Projects</i> 
					</a>
					<br />
					<br />
					
					<p className="text-right">
						<a className="linkStyle1" href="#/contact">
							<i className="fa fa-chevron-right"></i><span>Contact me</span>
						</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</p>
				</div>
			< /div>
		);	
	}
});

module.exports = Projects;
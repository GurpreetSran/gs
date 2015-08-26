var React = require('react'),
	projectsData = require('./../projects'),
	ProjectsRow = require('./projects_row'),
	itemsInRow = 3,
	noOfDefaultRows = 2,
	projects = [],
	currentProjects = [],
	currentPageRows,
	currentParamKey,
	Projects,
	noProjectAvailable = false;

	Projects = React.createClass({
	//Comarison is not case sensitive, this method returns title as saved in db.	
	getActualTitle: function(title) {
		var skills,
			i,
			projectsList;

		projectsList = projectsData.getByKey(title);	

		if(projectsList.length > 0) {
			skills = projectsList[0].skills;

			for(i=0; i < skills.length; i++ ) {
				if(title.toLowerCase() === skills[i].toLowerCase()) {
					return skills[i];
				}
			} 
		} 

		return false;
	},

	componentWillMount: function() {
		this.componentConfig(this.props);
	}, 

	componentWillReceiveProps: function(nextProps){
		this.componentConfig(nextProps);
	},

	componentConfig: function(props) {
		var rows = [],
			loadMoreIsVisible = true,
			i; 

		if(props.params.key) {
			currentParamKey = props.params.key;
		}else {
			currentParamKey = 'projects';
		} 	
		
		projects = projectsData.getByKey(currentParamKey);	

		if(projects.length === 0) {
			noProjectAvailable = true;
		} else {
			noProjectAvailable = false;
		}

		projectsData.currentState[currentParamKey] = noOfDefaultRows;		
		currentProjects = projects.slice(); //Create a copy or array 
		noOfDefaultRows = projectsData.currentState[currentParamKey] || noOfDefaultRows; 	
	
		for (i = 0; i < noOfDefaultRows; i++) {
			if(currentProjects.length) {
				rows.push(currentProjects.splice(0, itemsInRow));
			} 
		}  

		currentProjects.length ? loadMoreIsVisible = true : loadMoreIsVisible = false;

		this.setState({rows: rows});  
		this.setState({loadMoreBtn: loadMoreIsVisible})	
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

		var projectUrl, 
			header = '';

		if(currentParamKey === 'projects') {
			projectUrl = '#/project';
		} else {
			header = currentParamKey;
			projectUrl = '#/project/' + currentParamKey
		} 	

		if(noProjectAvailable) {
		return (

				<div>
					<div className="jumbotron">
						<div className="container">
							<h1 className="error">Navigation Error</h1>
						</div>
					</div>		
					<div className="container">
						<p className="error">
							Invalid project id or URL
						</p>	
						<br />
						<a className="linkStyle1" href={'#/projects'}>
							<i className="fa fa-angle-right"></i><span>Projects</span>
						</a>
					</div> 
				</div>
			)
		}

		return (
			< div className="projects">
				< div className = "jumbotron" >
					< div className = "container" >
						< h1 > { this.getActualTitle(header) ? this.getActualTitle(header) + ' Projects' : 'Projects'}   < /h1> 
					< /div> 
				< /div>

				< div className = "container" >					
					{this.state.rows.map(function(row, i) {
						return <ProjectsRow url={projectUrl} row={row} key={i} />
					}.bind(this))}
				
				< /div> 

				< div className = "container text-center" >	
					<a id="loadMore" className= {this.state.loadMoreBtn ? 'linkStyle1' : 'hide'} 
						onClick = {this.loadMoreProjects}
						role="button" > <i className="fa fa-angle-down"></i><span>Load More Projects</span> 
					</a>
					<br />
					<br />
					
					<div className="contact-me-link">
						<a className="linkStyle1" href="#/contact">
							<i className="fa fa-angle-right"></i><span>Contact</span>
						</a>
					</div>
				</div>
			< /div>
		);	
	}
});

module.exports = Projects;
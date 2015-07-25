var React = require('react/addons'),
	ReactTransitionGroup = React.addons.CSSTransitionGroup;

var ProjectsRow = React.createClass({

	render: function() {

		return ( 
			<ReactTransitionGroup transitionName="reactClass" transitionAppear={true}>	
				< div className = "row" > 
					{this.props.row.map(function(project) {
						return  < div className = "col-md-4 project" key={project.id} >
									< div className="text-center img-container"> <img alt="logo" src={project.thumbnail} />< /div >
									
									<h4 className="text-center"> 
										< a className = "linkStyle1"
										href = {'#/project/' + project.id} >
											<i className="fa fa-angle-right"></i>{project.title} 
											</a>
									< /h4>   
									
								< /div>
					})}
				< /div> 
			<hr />	
			</ReactTransitionGroup>			   
		);
	}
});

module.exports = ProjectsRow;
var React = require('react');

var ProjectsRow = React.createClass({

	render: function() {

		return ( 
			<div>	
				< div className = "row" > 
					{this.props.row.map(function(project) {
						return  < div className = "col-md-4 project" key={project.id} >
									< div className="text-center"> <img alt="logo" src={project.thumbnail} />< /div >
									< a className = "text-center" 
											href = {'#/project/' + project.id} >
										<h3 className= ""> {project.title} < /h3>   
									</ a >	
								< /div>
					})}
				< /div> 
			<hr />	
			</div>			   
		);
	}
});

module.exports = ProjectsRow;
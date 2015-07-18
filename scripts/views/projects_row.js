var React = require('react');

var ProjectsRow = React.createClass({

	render: function() {

		return ( 
			<div>	
				< div className = "row" > 
					{this.props.row.map(function(project) {
						return  < div className = "col-md-4" key={project.id} >
									< div className="text-center"> <img alt="logo" src={project.thumbnail} />< /div >
									<h3 className= "text-center"> {project.title} < /h3>   
									< p className="text-center"> 
										< a className = "btn btn-primary" 
											href = {'#/description/' + project.id} 
											role = "button" > View details < /a>
									</p >
								< /div>
					})}
				< /div> 
			<hr />	
			</div>			   
		);
	}
});

module.exports = ProjectsRow;
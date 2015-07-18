var React = require('react');

var ProjectsRow = React.createClass({

	render: function() {

		return ( 
			<div>	
				< div className = "row" > 
					{this.props.row.map(function(project) {
						return  < div className = "col-md-4" key={project.id} >
									< h2 > {project.title} < /h2> 
									< p > Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna mollis euismod.Donec sed odio dui. < /p > 
									< p > < a className = "btn btn-default" href = "#" role = "button" > View details» < /a></p >
								< /div>
					})}
				< /div> 
			<hr />	
			</div>			   
		);
	}
});

module.exports = ProjectsRow;
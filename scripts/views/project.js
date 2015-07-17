var React = require('react'),
	projectData = require('./../../projects.json');

var Project = React.createClass({

	getInitialState: function() {
		return {
			heading: 'Default Title',
			imageURL: 'Deafult URL'
		}
	},

	componentDidMount: function() {
		var projects = projectData.projects;

		for (var i = 0; i < projects.length; i++) {
			if (projects[i].id == this.props.id) {

				if (this.isMounted()) {
					this.setState({
						heading: projects[i].title,
						imageURL: projects[i].thumbURL
					});
				}
			}
		}
	},
	

	render: function() {
		return ( < div className = "col-md-4" >
			< h2 > {
				this.state.heading
			} < /h2> < p > Donec id elit non mi porta gravida at eget metus.Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna mollis euismod.Donec sed odio dui. < /p > < p > < a className = "btn btn-default"
			href = "#"
			role = "button" > View details» < /a></p >
			< /div>
		);
	}
});

module.exports = Project;
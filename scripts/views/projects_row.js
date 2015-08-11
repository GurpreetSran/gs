var React = require('react/addons'),
	ImageLoader = require('react-imageloader'),
	ReactTransitionGroup = React.addons.CSSTransitionGroup;
	

var ProjectsRow = React.createClass({

	preloader: function() {
		return <img title="Loader" src="./assets/images/600x200-loader.gif" />;
	},

	render: function() {

		return ( 
			<ReactTransitionGroup transitionName="reactClass" transitionAppear={true}>	
				< div className = "row" > 
					{this.props.row.map(function(project) {
						return  < div className = "col-md-4 project" key={project.id} >
									< div className="text-center img-container"> 
										<ImageLoader
										    src={project.thumbnail}
										    title= "project image"
										    alt="logo"
										    preloader={this.preloader}>
										    Image load failed!
									  	</ImageLoader>
									< /div >
									
									<h4 className="text-center"> 
										< a className = "linkStyle1"
										href = { this.props.url + '/' + project.id} >
											<i className="fa fa-angle-right"></i>{project.title} 
											</a>
									< /h4>   
									
								< /div>
					}.bind(this))}
				< /div> 
			<hr />	
			</ReactTransitionGroup>			   
		);
	}
});

module.exports = ProjectsRow;
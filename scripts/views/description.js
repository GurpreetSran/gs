React = require('react')

var Description = React.createClass({
	render: function() {
		return(
			<div>
				<br /><br /><br /><br /><br /><br /><br />
				{this.props.params.id}
				

				<h1>project Description</h1>				
			</div>
		); 
	}
});

module.exports = Description;
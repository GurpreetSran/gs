React = require('react'),
	pkg = require('./../../package.json');

var AppFooter = React.createClass({
	render: function() {
		return(
			<div>
				{pkg.version}
			</div>
		); 
	}
});

module.exports = AppFooter
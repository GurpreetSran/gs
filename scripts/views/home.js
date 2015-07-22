var React = require('react'),
	homeAnimation = require('./../home_animation');

var Home = React.createClass({
 
 componentDidMount: function () {
    homeAnimation(React.findDOMNode(this).childNodes[1]);
  },

  render: function() {
    return(
    	<div>
			<div className="jumbotron">
				<div className="container">
					<h1>I make web beautiful!</h1>
				</div>
			</div>
			<div className="container text-center">
				
			</div>
			<div className="container">
				<br />
				<p className="text-right">
					<a href="#/about">
						<span className="glyphicon glyphicon-menu-right">More about me</span>
					</a>
				</p>
			</div>
		</div>	
    ); 
  }
});

module.exports = Home;   


var React = require('react'),
	homeAnimation = require('./../home_animation'),
	engine; 

var Home = React.createClass({
 
 componentDidMount: function () {
    engine = homeAnimation(React.findDOMNode(this).childNodes[1]);
  },

  componentWillUnmount: function() {
  	engine.enabled = false;
  	engine = null;
  },

  render: function() {
    return(
    	<div>
			<div className="jumbotron">
				<div className="container">
					<h1>I make web beautiful!</h1>
				</div>
			</div>
			<div className="container text-center animationContainer">
				
			</div>
			<div className="container">
				<br /><br />
				<p className="text-right">
					<a href="#/about">
						 <i className="fa fa-chevron-right"></i><span>More about me</span>
					</a>
				</p>
			</div>
		</div>	
    ); 
  }
});

module.exports = Home;   


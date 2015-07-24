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
    	<div className="home">
			<div className="jumbotron">
				<div className="container">
					<h1>I make web beautiful!</h1>
				</div>
			</div>
			<div className="container text-center">
				{/*Canvas will be inserted here*/}
			</div>
			<div className="container">
				
				<div className="text-right">
					<a className="linkStyle1" href="#/about">
						<i className="fa fa-angle-right"></i><span>More about me</span>
					</a>
				</div>
			</div>
		</div>	
    ); 
  }
});

module.exports = Home;   


var React = require('react');

var Home = React.createClass({
  render: function() {
    return(
    	<div>
			<div className="jumbotron">
				<div className="container">
					<h1>I make web beautiful!</h1>
				</div>
			</div>
			<div className="container text-center eeeBackground">
				<img id="homePageMainImage" alt="beautiful web" 
					src="http://gurpreetsran.github.io/portfolio/assets/images/intro-main.png" />
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


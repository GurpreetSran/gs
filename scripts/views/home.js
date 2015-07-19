var React = require('react');

var Home = React.createClass({
  render: function() {
    return(
    	<div>
			<div className="jumbotron">
				<div className="container text-center">
					<h1>I make web beautiful!</h1>
				</div>
			</div>
			<div className="container text-center">
				<img id="homePageMainImage" alt="beautiful web" 
					src="http://gurpreetsran.github.io/portfolio/assets/images/intro-main.png" />
				
				<br/>
				<br/>

				<p className="text-right">
					<a href="#/about" > More about me </a>
				</p> 
				<br/>	

			</div>

		</div>	
    ); 
  }
});

module.exports = Home;   


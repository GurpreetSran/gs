var React = require('react');

var NotFound = React.createClass({
  render: function() {
    return(
      <div className="container">
      	<br /><br /><br />
        
        <h1>Page Not Found</h1>
        
        <p className="text-center">
          <a href="#/home">
            <img src="./assets/images/404.jpg" title="404" />
          </a>
        </p>
        
        <br />
        
        <div className="text-right">
          <a className="linkStyle1" href="#/home">
             <i className="fa fa-angle-right"></i><span>Home</span>
          </a>
        </div>
      
      </div>
    ); 
  }
});

module.exports = NotFound;   

//jquery - bootstarp dependency
$ = jQuery = require('jquery');
//Initialise bootstarp 
var bootstrap = require('bootstrap'),
	React = require('react'),
	Footer = require('./components/footer');
	
	React.render(<Footer />, $('footer')[0]);
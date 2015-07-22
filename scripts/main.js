//jquery - bootstarp dependency
$ = jQuery = require('jquery');

var bootstrap = require('bootstrap'), //Initialise bootstarp for template 
	initApp = require('./routes');

initApp(); //Initialise Application 



$(document).ready(function() {

	//Collapse nav on outside click
	$(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $("#navbar").hasClass("in");
        
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});
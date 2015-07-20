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

	$(window).on('popstate', function() {
		updateNav();
	});

	//Update selected nav on hash update 
	var updateNav = function() {

		var url = window.location;
		$('nav li').removeClass('active');

		// Will only work if string in href matches with location
		$('ul.nav a[href="' + url + '"]').parent().addClass('active');

		// Will also work for relative and absolute hrefs
		$('ul.nav a').filter(function() {
			return this.href == url;
		}).parent().addClass('active');
	};

	updateNav();

});
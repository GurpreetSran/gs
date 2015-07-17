//jquery - bootstarp dependency
$ = jQuery = require('jquery');

var bootstrap = require('bootstrap'), //Initialise bootstarp for template 
	initApp = require('./routes');

initApp(); //Initialise Application 



$(document).ready(function() {
	/*Bootstrap fixes*/
	$('body').on('click', 'nav li', function(e) {
		e.stopImmediatePropagation();
		$(this).removeClass('active');
	})

	$(function() {
		$('.navbar-nav').on('click', function() {
			if ($('.navbar-header .navbar-toggle').css('display') != 'none') {
				$(".navbar-header .navbar-toggle").trigger("click");
			}
		});
	});

	$(window).on('popstate', function() {
		updateNav();
	});

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
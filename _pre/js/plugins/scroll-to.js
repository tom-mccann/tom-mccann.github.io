$(document).ready(function() {

	$('.scroll-to').click(function(e) {

		var thisHref = $(this).attr("href");

		if ( thisHref == "" ) {

			alert( "ATTENTION: This link has a scroll-to class. You need to add a href attribute value for this scroll-to link to function correctly. Make sure the href attribute value starts with a '#'" );
			
		} else {

			$("html, body").animate( { scrollTop: Math.ceil( $(thisHref).offset().top) }, 1000 );
				
				if ( $('#hamburgerNav').hasClass('active') ) {
				
					hideHamburgerNav();
					
				}

			setTimeout(function() {

				window.location.hash = thisHref;

			}, 1000);
	
		}

		e.preventDefault();

	});  

});
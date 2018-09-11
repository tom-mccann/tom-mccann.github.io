function scrollActions() {

	var viewportHeight = $(window).height();
	var scrollTrigger = topOfViewport + (viewportHeight / 4 * 3);

	$('.scroll-action').each(function() {
	
		var viewportPosition = $(this).offset().top;
	
		if ( viewportPosition < scrollTrigger ) {
		
			$(this).addClass('scroll-run');
			
		} else if ( viewportPosition >= topOfViewport + viewportHeight ) {
		
			$(this).removeClass('scroll-run');
			
		}
		
	});

}

$(document).ready(function() {

	scrollActions();
    
});

$(window).resize(function() {
	
	scrollActions();

});

/*
$(window).on('orientationchange', function() {

	scrollActions();

});
*/

$(window).scroll(function() {

	scrollActions();
	
});
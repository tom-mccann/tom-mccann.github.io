$(document).ready(function() {

	if ( $('.accordion-content').hasClass('active') ) {

		

	}

	$('.accordion-header').click( function() {
	//$('.accordion-header').on('tap', function() {

		thisAccordion = $(this).closest('.accordion');

		if ( $('.accordion-content', thisAccordion).hasClass('active') ) {

			$('.accordion-content', thisAccordion).removeClass('active');
			$('.accordion-content', thisAccordion).slideUp();

		} else {

			$('.accordion-content', thisAccordion).addClass('active');
			$('.accordion-content', thisAccordion).slideDown();

		}

	});

});
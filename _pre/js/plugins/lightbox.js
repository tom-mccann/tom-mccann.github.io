var iLightBox = document.getElementById("lightBox");
var iLightBoxDimmer = document.getElementById("lightBoxDimmer");
var lightBoxImgURL;
var newImg = new Image();

function showLightBox() {

	iLightBox.className = "show";
	//$('#lightBox').addClass('show');
	iLightBoxDimmer.className = "show";
	//$('#lightBoxDimmer').addClass('show');
	
	setTimeout(function(){
	
		iLightBox.className += " active";
		//$('#lightBox').addClass('active');
		iLightBoxDimmer.className += " active";
		//$('#lightBoxDimmer').addClass('active');
		
	}, 50);
	
	eHtml.className = "active-lightbox";
	//$('html').addClass('active-lightbox');

}

function hideLightBox() {

	iLightBox.className = "show";
	//$('#lightBox').removeClass('active');
	iLightBoxDimmer.className = "show";
	//$('#lightBoxDimmer').removeClass('active');
	
	setTimeout(function(){
	
		iLightBox.className = "";
		//$('#lightBox').removeClass('show');
		iLightBoxDimmer.className = "";
		//$('#lightBoxDimmer').removeClass('show');
		
	}, 500);
	
	eHtml.className = "";
	//$('html').removeClass('active-lightbox');

}

$(document).ready(function() {

   	$('.lightbox a').click( function(e) {
   	//$('.lightbox a').on('tap', function(e) {
	
		lightBoxImgURL = $(this).attr('href');
		newImg.src = lightBoxImgURL;
		
		$('#lightBoxImg').attr( 'src', newImg.src );
	
		showLightBox();
		e.preventDefault();
		
	});
	
	$('#lightBoxBgClick, #lightBoxCloseBtn').click( function() {
	//$('#lightBoxBgClick, #lightBoxCloseBtn').on('tap', function() {
	
		hideLightBox();
		
	});

});
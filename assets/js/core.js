/*	==========================================================
	GLOBAL VARIABLES
	========================================================== */

	//var newImg = new Image();
	//var img;

	var pagePath = window.location.pathname;
	//console.log ( "pagePath: " + pagePath );

	var eHtml = document.getElementsByTagName('html')[0];
	//console.log ( "eHtml: " + eHtml );

	var eBody = document.getElementsByTagName('body')[0];
	//console.log ( "eBody: " + eBody );

	var eA = document.getElementsByTagName('a');
	//console.log ( "eA: " + eA );

	//var eImg = document.getElementsByTagName('img');
	//console.log ( "eImg: " + eImg );

	var iCookieNotice = document.getElementById('cookieNotice');
	//console.log ( "iCookieNotice: " + iCookieNotice );

	var iHamburger = document.getElementById('hamburger');
	//console.log ( "iHamburger: " + iHamburger );

	var iHamburgerNav = document.getElementById('hamburgerNav');
	//console.log ( "iHamburgerNav: " + iHamburgerNav );

	var iHamburgerNavDimmer = document.getElementById('hamburgerNavDimmer');
	//console.log ( "iHamburgerNavDimmer: " + iHamburgerNavDimmer );

	//var screenRes = window.screen.availWidth;
	//console.log ( "Screen Resolution: " + screenRes );

/*	==========================================================
	FUNCTIONS
	========================================================== */

function closeCookieNotice() {

	localStorage.setItem( 'cookieNotice', true );
	iCookieNotice.classList.remove('active');

	setTimeout(function(){

		iCookieNotice.classList.remove('show');

	}, 500);

	setTimeout(function(){

		iCookieNotice.innerHTML = ""

	}, 700);

}

function cookieNotice() {

	if ( localStorage.getItem('cookieNotice') === null ) {

		iCookieNotice.innerHTML = "<p>This website and it's third party services uses cookies. If you continue to use this site you agree to the use of cookies. Please review our <a href=\"//www.iubenda.com/privacy-policy/" + ppid + "/cookie-policy\" class=\"iubenda-nostyle no-brand iubenda-embed\" title=\"Cookie Policy\">Cookie Policy</a><button type=\"button\" id=\"closeButton\" onclick=\"closeCookieNotice()\">Accept &amp; Close</button>";

		iCookieNotice.classList.add('show');

		setTimeout(function(){

			iCookieNotice.classList.add('active');

		}, 50);

	}

}

function activeNav() {

	for(i = 0; i < eA.length; i++) {

		if ( eA[i].getAttribute('href') == pagePath ) {

			eA[i].classList.add('active')

		}

	}

}

function showHamburgerNav() {

	iHamburgerNav.classList.add('show');
	iHamburgerNavDimmer.classList.add('show');

	setTimeout(function(){

		iHamburgerNav.classList.add('active');
		iHamburgerNavDimmer.classList.add('active');

	}, 50);

	eHtml.classList.add('hamburger-active');

}

function hideHamburgerNav() {

	iHamburgerNav.classList.remove('active');
	iHamburgerNavDimmer.classList.remove('active');

	setTimeout(function(){

		iHamburgerNav.classList.remove('show');
		iHamburgerNavDimmer.classList.remove('show');

	}, 500);

	eHtml.classList.remove('hamburger-active');

}
/*
newImg.onload = function() {
	img.src = this.src;
}

function loadImages() {

	for(i = 0; i < eImg.length; i++) {

		if ( eImg[i].hasAttribute("data-src") ) {

			img = eImg[i];
			newImg.src = img.getAttribute("data-src");

		}

	}

}
*/
window.addEventListener('load', function() {

/*	==========================================================
	CLICK EVENTS
	========================================================== */

	// HAMBURGER ICON

	if ( iHamburger !== null ) {

		iHamburger.addEventListener('click', function() {

			if ( iHamburgerNav.classList.contains('active') ) {

				hideHamburgerNav();

			} else {

				showHamburgerNav();

			}

		});

	}

	// HAMBURGER NAV DIMMER

	if ( iHamburgerNavDimmer !== null ) {

		iHamburgerNavDimmer.addEventListener('click', function() {

			hideHamburgerNav();

		});

	}

/*	==========================================================
	INVOKE FUNCTIONS
	========================================================== */

	activeNav();
	// cookieNotice();
	//loadImages();

});

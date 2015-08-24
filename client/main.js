Template.layout.onRendered(function () {
  $('.button-collapse').sideNav();



  // smooth scroll to anchor points
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});

Template.home.onRendered(function () {
  	setBanner();
});

// dynamically set the banner-area height
function setBanner(){
  var theWindow = $(window);
  var windowHeight = theWindow.height();
  var navHeight = $('nav').height();
  $('#search-hero').height(windowHeight - navHeight);
}

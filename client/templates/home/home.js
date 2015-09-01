Template.home.onRendered(function () {
  var theWindow = $(window);
  var windowHeight = theWindow.height();
  var navHeight = $('nav').height();
  $('#search-hero').height(windowHeight - navHeight);
});

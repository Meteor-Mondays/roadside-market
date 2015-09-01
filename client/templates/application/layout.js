Template.layout.onRendered(function () {
  $('.button-collapse').sideNav();

  // smooth scroll to anchor points
  $('a[href*=#]:not([href=#])').click(function() {
    if (window.location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && window.location.hostname === this.hostname) {
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

Template.layout.helpers({
  displayName: function() {
    if (Meteor.user()) return Meteor.user().profile.displayName;
    return '';
  }
});

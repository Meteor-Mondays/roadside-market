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

Template.layout.events({
  'click #sign-out': function(e) {
    e.preventDefault();
    Meteor.logout();
  }
});

Template.home.onRendered(function () {
  setBanner();
});

Template.signIn.events({
  'submit #sign-in-form': function(e, t) {
    e.preventDefault();
    var email = t.find('#login-email').value,
    password = t.find('#login-password').value;

    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        console.warn(err);
      } else {
        Router.go('home');
      }
    });
  }
});

Template.signUp.events({
  'submit #sign-up-form': function(e, t) {
    e.preventDefault();
    var firstName = t.find('#first-name').value,
    lastName = t.find('#last-name').value,
    password = t.find('#login-password').value,
    email = t.find('#login-email').value;

    Accounts.createUser({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }, function(err) {
      if (err) {
        console.warn(err);
      } else {
        Router.go('home');
      }
    });
  }
});

// dynamically set the banner-area height
var setBanner = function() {
  var theWindow = $(window);
  var windowHeight = theWindow.height();
  var navHeight = $('nav').height();
  $('#search-hero').height(windowHeight - navHeight);
};

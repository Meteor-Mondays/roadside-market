Template.signIn.events({
  'submit form': function(e) {
    e.preventDefault();

    var email = $(e.target).find('[id=login-email]').val();
    var pass = $(e.target).find('[id=login-password]').val();

    return Meteor.loginWithPassword(email, pass, function(error) {
      if (error) {
        console.log(error);
      } else {
        Router.go('home');
      }
    });
  }
});

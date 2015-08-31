Template.signUp.events({
  'submit form': function(e) {
    e.preventDefault();

    var email = $(e.target).find('[id=login-email]').val();
    var pass = $(e.target).find('[id=login-password]').val();
    var fname = $(e.target).find('[id=first-name]').val();
    var lname = $(e.target).find('[id=last-name]').val();

    return Accounts.createUser({
      email: email,
      password: pass,
      profile: {
        firstname: fname,
        lastname: lname,
        isAdmin: false,
        displayName: fname + ' ' + lname
      }
    }, function(error) {
      if (error) {
        console.log(error);
      } else {
        Router.go('home');
      }
    });
  }
});

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFound: 'notFound'
});

Router.route('/sign-in', {
  name: 'signIn'
});

Router.route('/sign-up', {
  name: 'signUp'
});

Router.route('/sign-out', {
  name: 'signOut',
  action: function() {
    if (Meteor.user()) {
      return Meteor.logout(function() {
        return Router.go('home');
      });
    } else {
      Router.go('home');
    }
  }
});

Router.route('/buyer/landing', {
  name: 'buyerLanding'
});

Router.route('/stand/landing', {
  name: 'stand'
});

Router.route('/', {
  name: 'home'
});

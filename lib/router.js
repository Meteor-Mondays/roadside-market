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
  name: 'signOut'
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

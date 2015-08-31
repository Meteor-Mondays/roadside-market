Template.layout.helpers({
  displayName: function() {
    if (Meteor.user()) return Meteor.user().profile.displayName;
    return '';
  }
});

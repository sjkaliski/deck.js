define([
  'models/collection',
  'models/user'
], function(Collection, User) {

  var Users = Collection.extend({

    model: function(attrs, options) {
      return User.create(attrs, options);
    },

    url: function() {
      return '/tables/' + this.owner.id + '/users'
    }

  });

  return Users;

});

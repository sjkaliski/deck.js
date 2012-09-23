define(['models/model'], function(Model) {

  var User = Model.extend({

    urlRoot: function() {
      return '/tables/' + this.get('table_id') + '/users'
    }

  });

  return User;

});

define([
  'models/model',
  'models/cards',
  'models/users'
], function(Model, Cards, Users) {

  var Table = Model.extend({

    initialize: function() {
      Model.prototype.initialize.apply(this, arguments);
      this.cards = new Cards();
      this.users = new Users();
    },

    urlRoot: '/api/tables',

    parse: function(resp) {
      Model.prototype.parse.apply(this, arguments);
      data = resp.data;
      this.cards.reset(data.cards);
      this.users.reset(data.users);
      delete data.cards;
      delete data.users;
      return data;
    }

  });

  return Table;

});

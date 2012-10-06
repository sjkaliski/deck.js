define([
  'underscore',
  'models/model',
  'models/cards',
  'models/users'
], function(_, Model, Cards, Users) {

  var Table = Model.extend({

    urlRoot: '/api/tables',

    toJSON: function() {
      return {
        name: this.attributes.name,
        users: this.users().toJSON(),
        cards: this.cards().toJSON()
      };
    }

  });

  return Table;

});

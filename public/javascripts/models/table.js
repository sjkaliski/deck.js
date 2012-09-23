define([
  'models/model',
  'models/cards',
  'models/users'
], function(Model, Cards, Users) {

  var Table = Model.extend({

    initialize: function() {
      Model.prototype.initialize.apply(this, arguments);
    },

    urlRoot: '/api/tables'

  });

  return Table;

});

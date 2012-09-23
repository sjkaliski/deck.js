define([
  'models/collection',
  'models/card'
], function(Collection, Card) {

  var Cards = Collection.extend({

    model: function(attrs, options) {
      return Card.create(attrs, options);
    }

  });

  return Cards;

});

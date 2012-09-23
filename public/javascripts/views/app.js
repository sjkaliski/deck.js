define([
  'quilt',
  'list',
  'models/cards',
  'views/card'
], function(Quilt, List, Cards, CardView) {

  var App = Quilt.View.extend({

    render: function() {
      var cardView;

      cards = new Cards([{
        value: '7',
        suit: 'Heart'
      }, {
        value: 'A',
        suit: 'Spade'
      }, {
        value: 'J',
        suit: 'Club'
      }, {
        value: '10',
        suit: 'Diamond'
      }]);

      this.views.push(new List({
        el: this.$el,
        view: CardView,
        collection: cards
      }).render());
    }

  });

  return App;

});

define([
  'quilt',
  'list',
  'views/card',
  'jst!templates/table'
], function(Quilt, List, CardView, jst) {

  var TableView = Quilt.View.extend({

    template: jst,

    render: function() {
      Quilt.View.prototype.render.apply(this, arguments);

      this.views.push(new List({
        el: this.$el,
        view: CardView,
        collection: this.model.cards
      }).render());

      return this;
    }

  });

  return TableView;

});

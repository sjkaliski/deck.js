define([
  'quilt',
  'list',
  'views/card',
  'views/user-drop',
  'jst!templates/table'
], function(Quilt, List, CardView, UserDropView, jst) {

  var TableView = Quilt.View.extend({

    template: jst,

    render: function() {
      Quilt.View.prototype.render.apply(this, arguments);

      this.views.push(new List({
        el: this.$deck,
        view: CardView,
        collection: this.model.cards()
      }).render());

      this.views.push(new List({
        el: this.$users,
        view: UserDropView,
        collection: this.model.users()
      }).render());

      return this;
    }

  });

  return TableView;

});

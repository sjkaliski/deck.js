define([
  'list',
  'quilt',
  'views/table-row',
  'jst!templates/index'
], function(List, Quilt, TableRowView, jst) {

  var IndexView = Quilt.View.extend({

    template: jst,

    render: function() {
      Quilt.View.prototype.render.apply(this, arguments);

      this.views.push(new List({
        el: this.$list,
        collection: this.collection,
        view: TableRowView
      }).render());

      return this;
    }

  });

  return IndexView;

});

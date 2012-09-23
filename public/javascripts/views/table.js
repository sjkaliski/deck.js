define([
  'quilt',
  'jst!templates/table'
], function(Quilt, jst) {

  var TableView = Quilt.View.extend({

    template: jst,

    render: function() {
      Quilt.View.prototype.render.apply(this, arguments);

      console.log(this.model.cards(), this.model.users())

      return this;
    }

  });

  return TableView;

});

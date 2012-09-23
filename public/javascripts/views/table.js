define([
  'quilt',
  'jst!templates/table'
], function(Quilt, jst) {

  var TableView = Quilt.View.extend({

    template: jst,

    render: function() {
      Quilt.View.prototype.render.apply(this, arguments);

      return this;
    }

  });

  return TableView;

});

define([
  'quilt'
], function(Quilt) {

  var TableView = Quilt.View.extend({

    render: function() {
      console.log(this.model);
      return this;
    }

  });

  return TableView;

});

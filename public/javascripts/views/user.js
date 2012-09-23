define([
  'quilt'
], function(Quilt) {

  var UserView = Quilt.View.extend({

    render: function() {
      console.log(this.model);
      return this;
    }

  });

  return UserView;

});

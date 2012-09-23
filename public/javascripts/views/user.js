define([
  'quilt',
  'jst!templates/user'
], function(Quilt, jst) {

  var UserView = Quilt.View.extend({

    template: jst,

    render: function() {
      Quilt.View.prototype.render.apply(this, arguments);
      return this;
    }

  });

  return UserView;

});

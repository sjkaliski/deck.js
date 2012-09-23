define([
  'quilt',
  'jst!templates/user-drop'
], function(Quilt, jst) {

  var UserDropView = Quilt.View.extend({

    template: jst,

    render: function() {
      Quilt.View.prototype.render.apply(this, arguments);

      this.$el.droppable({
        drop: function(e, ui) {
          console.log($(e.target).data('card-id'));
        }
      });

      return this;
    }

  });

  return UserDropView;

});

define([
  'backbone',
  'quilt',
  'router',
  'models/associations'
], function(Backbone, Quilt, Router) {

  var App = Quilt.View.extend({

    initialize: function() {
      Quilt.View.prototype.initialize.apply(this, arguments);
      this.router = new Router({ app: this });
    },

    events: {
      'route a': 'route'
    },

    route: function(e, fragment) {
      this.router.navigate(fragment, true);
    },

    render: function() {
      Quilt.View.prototype.render.apply(this, arguments);
      Backbone.history.start({ pushState: true });
      return this;
    }

  });

  return App;

});

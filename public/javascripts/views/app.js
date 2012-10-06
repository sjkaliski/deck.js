define([
  'backbone',
  'quilt',
  'router',
  'models/tables',
  'socket',
  'models/associations',
  'jqueryui',
  'ui/all'
], function(Backbone, Quilt, Router, Tables, socket) {

  var App = Quilt.View.extend({

    initialize: function() {
      var _this = this;

      Quilt.View.prototype.initialize.apply(this, arguments);
      
      this.tables = new Tables();
      this.router = new Router({ app: this });

      socket.on('update', function(data) {
        console.log(data);
        _this.tables.get(data._id).set(data);
      });
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

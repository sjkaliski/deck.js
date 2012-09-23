define([
  'backbone',
  'models/table',
  'models/user',
  'views/table',
  'views/user'
], function(Backbone, Table, User, TableView, UserView) {

  var Router = Backbone.Router.extend({

    constructor: function(options) {
      Backbone.Router.prototype.constructor.apply(this, options);
      this.app = options.app;
    },

    routes: {
      'tables/create': 'create',
      'tables/:table_id': 'table',
      'tables/:table_id/join': 'join',
      'tables/:table_id/users/:user_id': 'view'
    },

    create: function() {
      var _this = this;
      var table = Table.create();
      table.save({}, {
        success: function(resp) {
          _this.navigate('/tables/' + table.get('id'), true);
        }
      });
    },

    table: function(table_id) {
      var table = Table.create({ id: table_id });
      this.changePage(new TableView({
        model: table
      }));
    },

    join: function(table_id) {
      var _this = this;
      var table = Table.create({ id: table_id });
      var user = User.create();
      user.save({}, {
        success: function(resp) {
          _this.navigate('/tables/' + table.get('id') + '/view', true);
        }
      })
    },

    view: function(table_id, user_id) {
      var table = Table.create({ id: table_id });
      var user = User.create({ id: user_id });
      this.changePage(new UserView({
        model: user
      }));
    },

    changePage: function(view) {
      var tab = this.tab;
      if (tab) tab.remove().destroy()
      this.app.$el.html((this.tab = view.render()).el)
    }

  });

  return Router;

});

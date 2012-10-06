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
      var name;
      do { name = prompt("Name the table."); } while (!name);
      var table = Table.create({ name: name });
      table.save({}).done(function() {
        _this.navigate('/tables/' + table.get('_id'), true);
      });
    },

    table: function(table_id) {
      var _this = this;
      var table = Table.create({ _id: table_id });
      table.fetch().done(function() {
        _this.changePage(new TableView({
          model: table
        }));
      });
    },

    join: function(table_id) {
      var _this = this;
      var table = Table.create({ _id: table_id });
      table.fetch().done(function() {
        var name;
        do { name = prompt("What's your name?"); } while (!name);
        var user = User.create({ table_id: table_id, name: name });
        user.save({}).done(function() {
          table.save({}).done(function() {
            _this.navigate('/tables/' + table.get('_id') + '/users/' + user.get('_id'), true);
          });
        });
      });
    },

    view: function(table_id, user_id) {
      var table = Table.create({ _id: table_id });
      var user = User.create({ _id: user_id });
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

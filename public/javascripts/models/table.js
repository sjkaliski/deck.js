define(['models/model'], function(Model) {

  var Table = Model.extend({

    urlRoot: '/api/tables',

    parse: function(resp) {
      Model.prototype.parse.apply(this, arguments);
      return resp.data;
    }

  });

  return Table;

});

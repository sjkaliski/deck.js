define([
  'models/collection',
  'models/table'
], function(Collection, Table) {

  var Tables = Collection.extend({

    model: function(attrs, options) {
      return Table.create(attrs, options);
    },

    url: '/api/tables'

  });

  return Tables;

});

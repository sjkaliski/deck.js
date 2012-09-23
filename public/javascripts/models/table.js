define(['models/model'], function(Model) {

  var Table = Model.extend({

    urlRoot: '/tables'

  });

  return Table;

});

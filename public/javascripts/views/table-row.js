define([
  'quilt',
  'jst!templates/table-row'
], function(Quilt, jst) {

  var TableRowView = Quilt.View.extend({

    tagName: 'tr',

    template: jst

  });

  return TableRowView;

});

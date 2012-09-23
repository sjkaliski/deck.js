define([
  'quilt'
], function(Quilt) {

  var FormatAttr = Quilt.View.extend({

    initialize: function(options) {
      this.format = options.format;
      this.attr = options.attr
      this.model.on('change:' + this.attr, this.render, this);
    },

    render: function() {
      value = this.model.get(this.attr);
      this.format(value);
      return this;
    }

  });

  return FormatAttr

});

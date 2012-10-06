define([
  'quilt',
  'backbone'
], function(Quilt, Backbone) {

  // Set an appropriate href with root.  Trigger "route" on click.
  Quilt.attributes.fragment = function(el, options) {
    new Fragment({
      el: el,
      fragment: options,
      root: '/'
    });
  };

  var Fragment = Quilt.View.extend({

    events: {
      click: 'click'
    },

    initialize: function(options) {
      Quilt.View.prototype.initialize.apply(this, arguments);
      this.root = options.root;
      this.fragment = options.fragment;
    },

    render: function() {
      this.$el.attr({ href: this.root + this.fragment });
      return this;
    },

    click: function(e) {
      e.preventDefault()
      this.$el.trigger('route', [this.fragment]);
    }

  });

});
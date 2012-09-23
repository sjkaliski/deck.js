define([
  'quilt'
], function(Quilt) {

  // Create a reference to an element for later (cached) use.
  Quilt.attributes.ref = function(el, options) {
    this['$' + options] = $(el);
  }

});

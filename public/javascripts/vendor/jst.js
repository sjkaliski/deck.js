define([
  'text',
  'underscore'
], function(text, _) {

  var modules = {};

  return {

    load: function(name, req, next, config) {

      var url = req.toUrl(name + '.jst');

      text.get(url, function(data) {
        if (config.isBuild) {
          modules[name] = require.nodeRequire('underscore')
            .template(data, null, {variable: 'o'})
            .source;
          return next(null);
        }
        next(_.template(data, null, {variable: 'o'}));
      });

    },

    write: function(plugin, name, write) {
      write('define("' + plugin + '!' + name +
        '", ["underscore"],function(_){return ' +
        modules[name] + '});');
    }

  };

});

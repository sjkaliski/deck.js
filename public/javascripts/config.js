require.config({
  stubModules: [
    'jst',
    'text'
  ],
  exclude: [
    'text'
  ],
  paths: {
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    quilt: 'vendor/quilt',
    supermodel: 'vendor/supermodel',
    text: 'vendor/text',
    list: 'vendor/list',
    jst: 'vendor/jst',
    socketio: 'socket.io/socket.io'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: 'jQuery'
    },
    supermodel: {
      deps: ['backbone'],
      exports: 'Supermodel'
    },
    quilt: {
      deps: ['backbone'],
      exports: 'Quilt'
    },
    list: {
      deps: ['quilt'],
      exports: 'List'
    },
    socketio: {
      exports: 'io'
    }
  }
});

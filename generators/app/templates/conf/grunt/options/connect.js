module.exports = {
  options: {
    base: '<%= dir.demo %>',
    hostname: '*',
    port: '<%= server.port.http %>',
    onCreateServer: function(server, connect, options) {
      console.log('Serving on port: ' + options.port);
    }
  },
  dev: {
    options: {
      livereload: '<%= server.port.livereload %>',
      open: false
    }
  },
  test_e2e: {
    options: {
      livereload: false,
      open: false
    }
  }
};

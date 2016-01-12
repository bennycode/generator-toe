module.exports = {
  options: {
    base: '.',
    hostname: '*',
    port: '<%= server.port.http %>',
    onCreateServer: function(server, connect, options) {
      console.log('Serving on port: ' + options.port);
    }
  },
  dev: {
    options: {
      livereload: '<%= server.port.livereload %>',
      open: 'http://localhost:<%= server.port.http %>/<%= dir.demo %>'
    }
  },
  test_e2e: {
    options: {
      livereload: false,
      open: false
    }
  }
};

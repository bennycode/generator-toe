module.exports = {
  options: {
    logConcurrentOutput: true
  },
  test_e2e: {
    tasks: [
      "connect:test_e2e:keepalive",
      "nightwatch:default"
    ]
  }
};

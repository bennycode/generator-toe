module.exports = {
  options: {
    vendor: '<%= dir.lib %>/**/*.js'
  },
  test_specs_coffee: {
    src: ['<%= dir.build_main_coffee %>/**/*.js'],
    options: {
      specs: ['<%= dir.build_test_coffee %>/**/*Spec.js']
    }
  },
  test_specs_js: {
    src: ['<%= dir.src_main_js %>/**/*.js'],
    options: {
      specs: ['<%= dir.src_test_js_jasmine_specs %>/**/*Spec.js']
    }
  },
  test_specs_ts: {
    src: ['<%= dir.build_main_ts %>/**/*.js'],
    options: {
      specs: ['<%= dir.build_test_ts %>/**/*Spec.js']
    }
  }
};

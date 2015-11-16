# generator-toe [![Build Status](https://secure.travis-ci.org/bennyn/generator-toe.png?branch=master)](https://travis-ci.org/bennyn/generator-toe)

> [Yeoman](http://yeoman.io) generator


## Getting Started

```bash
npm install -g npm                # Upgrade to latest npm version
npm install -g yo                 # Install Yeoman (globally)
npm install -g generator-toe      # Install Yeoman generator (globally)
yo toe                            # Run Yeoman generator
```

## Available Grunt Tasks

- **init**
- **check**
 - check_demo (*Check code style for demo code*)
    - `grunt check_demo_coffee`
    - `grunt check_demo_css`
    - `grunt check_demo_js`
    - `grunt check_demo_less`
    - `grunt check_demo_sass`
    - `grunt check_demo_ts`
 - check_main (*Check code style for main code*)
    - `grunt check_main_coffee`
    - `grunt check_main_css`
    - `grunt check_main_js`
    - `grunt check_main_less`
    - `grunt check_main_sass`
    - `grunt check_main_ts`
 - check_test (*Check code style for test code*)
    - `grunt check_test_coffee`
    - `grunt check_test_js`
    - `grunt check_test_less`
    - `grunt check_test_sass`
    - `grunt check_test_ts`
- **build**
 - build_demo (*Transpile demo code*)
    - `grunt build_demo_coffee`
    - `grunt build_demo_css`
    - `grunt build_demo_js`
	- `grunt build_demo_less`
    - `grunt build_demo_sass`
    - `grunt build_demo_ts`
 - build_lib (*Transpile dependencies*)
    - `grunt build_lib_coffee`
    - `grunt build_lib_ts`
 - build_main (*Transpile main code*)
    - `grunt build_main_coffee`
    - `grunt build_main_css`
    - `grunt build_main_js`
    - `grunt build_main_less`
    - `grunt build_main_sass`
    - `grunt build_main_ts`
 - build_test (*Transpile test code*)
    - `grunt build_test_coffee`
    - `grunt build_test_css`
    - `grunt build_test_js`
    - `grunt build_test_ts`
- **test**
 - test_spec (*Run a specification test with PhantomJS*)
    - `grunt test_spec_coffee:Proteus/util/KeyDerivationUtilSpec` 
    - `grunt test_spec_js:de/bennyn/crypto/ChaCha20/ContextSpec` 
    - `grunt test_spec_ts:Validation/HelloWorldSpec`
 - test_specs (*Run all specification tests with PhantomJS*)
    - `grunt test_specs_coffee`
    - `grunt test_specs_js`
    - `grunt test_specs_ts`
 - test_spec_browser (*Run a specification test with a browser*)
    - `grunt test_spec_browser_coffee:Chrome:Proteus/util/KeyDerivationUtilSpec`
    - `grunt test_specs_browser_js:PhantomJS:de/bennyn/crypto/ChaCha20/ContextSpec`
    - `grunt test_specs_browser_ts:IE:Validation/HelloWorldSpec`
 - test_specs_browser (*Run all specification tests with a browser*)
    - `grunt test_specs_browser_coffee:Chrome`
    - `grunt test_specs_browser_js:PhantomJS`
    - `grunt test_specs_browser_ts:IE`
 - test_e2e (*Run End-to-End tests on a development server*)
    - `grunt test_e2e_coffee`
    - `grunt test_e2e_js`
	- `grunt test_e2e_ts`
- **dist**
- **coverage**
- **develop**
- **docs**
- **deploy**
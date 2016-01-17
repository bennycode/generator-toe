# generator-toe

[![Build Status](https://secure.travis-ci.org/bennyn/generator-toe.png?branch=master)](https://travis-ci.org/bennyn/generator-toe)

![Eierlegende Wollmilchsau](https://dl.dropboxusercontent.com/u/74217418/github.io/bennyn/generator-toe/wollmilchsau.jpg)

`yo toe` is a generator for [Yeoman](http://yeoman.io) which creates a fantastic JavaScript project setup out-of-the-box including many features like code style checks, documentation generation, code coverage reports, minification and obfuscation and many more. Stay tuned for some videos which will show the benefits of this generator in detail.

## Getting Started

```bash
npm install -g yo                 # Install Yeoman
npm install -g generator-toe      # Install "yo toe"
yo toe                            # Run "yo toe"
```

## Development Pipeline

With `yo toe` you get a complete development pipeline out-of-the-box which includes the following Features...

### Initializing

`grunt init`

- Resolving dependencies (Dependency Management)

### Sanitizing

`grunt check`

- Code Style Checks (Linting)
- Checks for outdated comments

### Building

`grunt build`

- Transpilation of source code
- Transpilation of test code
- Transpilation of vendor files
- Transpilation of helper files
- Transpilation of stylesheets

### Testing

`grunt test`

- Unit testing (Specification Tests)
- End-to-End testing

### Reporting

`grunt docs`

- Code Coverage
- Documentation

### Distributing

`grunt dist`

- Concatenation
- Minification
- Obfuscation
- Compression
- Source Map Generation

### Deploying

- *... coming soon*

### Updating

`grunt update`

- Update of node modules

### Supporting

- Project setup for NetBeans IDE 8+
- Project setup for WebStorm IDE 10+

### Developing

`grunt dev`

- Development server
- File Watcher
- Live Reload

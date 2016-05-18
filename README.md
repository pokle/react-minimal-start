# react-minimal-start

A minimal React starter kit that you can build upon.

What you get:
	- Javascript ES2015 (ES6) compilation (Babel)
	- Npm is your package manager and build tool (no gulp / grunt bloat)
	- Live reload in the browser (budo + livereactload)

What you need to figure out on your own:
	- Tests - Use your own test tools
	- State management - Redux, Firebase, etc.

## Live reload

1. Start the watch script

		npm start

2. Make an edit to your code, and save it in your editor
3. Look at the result in the reloaded browser
4. Repeat

## Repl

	npm install --global babel-cli
	babel-node

## Finding your way around

Required by the build:

- `package.json`      - package manager configuration - edit your dependencies here
- `public/`	          - Everything here should be deployed
- `public/index.html` - bootstraps your application
- `public/build/`     - Compiled from src/app.js (by browserify and babelify)
- `src/`              - All your Javascript ES6 source files go here.
- `src/app.js`        - The main entry point

## Releasing

1. Build public/build/bundle.js

		npm run build

2. Deploy public/** to your website

## References
- [React](https://facebook.github.io/react/)
- [Babel](https://babeljs.io/)
- [Browserify](http://browserify.org/)
- [How to use npm as a build tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Budo](https://github.com/mattdesl/budo) the live reloading web server

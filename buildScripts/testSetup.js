// This file is not transpiled, so must use ES5 and CommonJS

//Register babel to transpile before our tests run
require('babel-register')()

//Disable webpack feature that Mocha does not understand
require.extensions['.css'] = function() {};

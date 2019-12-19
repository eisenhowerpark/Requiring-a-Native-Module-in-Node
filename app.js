var util = require ('util');
// util is part of the node API, but is not globally accessible like console methods. Therefore, we
// require it (or import, in ES6)
// We do not need to use "./" to define the file location because util is a core module.

var name = 'Drew';
var greeting = util.format('Greetings, %s', name); // util supports replace codes, such as %s, which
// replace string values in the order defined after the comma.
util.log(greeting); // util contains its own log method, which comes with a timestamp!
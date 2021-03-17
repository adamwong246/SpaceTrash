/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polybool2_test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* module decorator */ module = __webpack_require__.hmd(module);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function runTests(tests, subject) {
  console.log(subject.name);
  Object.keys(tests).forEach(function (testKey) {
    var assertion = tests[testKey].assertion;

    try {
      assertion(subject.apply(void 0, _toConsumableArray(tests[testKey].input)));
      console.log("\u2713  ".concat(testKey));
    } catch (e) {
      if (e instanceof (assert__WEBPACK_IMPORTED_MODULE_0___default().AssertionError)) {
        console.error("\u274C  ".concat(testKey, "  --  ").concat(assertion.toString()));
      } else {
        console.log("some other error: ", e);
      }
    }
  });
}

function idOfModuleWithExports(exportChunk) {
  var modules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : module;

  if (deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(modules.exports, exportChunk)) {
    return modules.id;
  } else {
    for (var i = 0; i < modules.children.length; i++) {
      var checkChild = idOfModuleWithExports(exportChunk, modules.children[i]);

      if (checkChild) {
        return checkChild;
      }
    }
  }
}

function testModule(testableModule, key) {
  var idOfTestedModule = idOfModuleWithExports(testableModule);
  console.log("Testing: ", idOfTestedModule);
  Object.keys(testableModule).some(function (k) {
    if (testableModule[k][key]) {
      runTests(testableModule[k][key], testableModule[k]);
    }
  });
}

testModule(_polybool2_test_js__WEBPACK_IMPORTED_MODULE_2__.default, "_tests"); // const theModule = module.children[1].children[0]
// console.log(theModule.id)
// // console.log(module.children[0].children[0].id)
// console.log(polyboolTests)
// // console.log(polyboolTests == module.children[0].children[0].exports)
// console.log("End of Line", deepEqual(polyboolTests, theModule.exports))

/***/ }),
/* 1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var objectAssign = __webpack_require__(2);

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (__webpack_require__.g.Buffer && typeof __webpack_require__.g.Buffer.isBuffer === 'function') {
    return __webpack_require__.g.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(3);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof __webpack_require__.g.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(__webpack_require__.g.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(4);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(5);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 5 */
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polybooljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var polybooljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polybooljs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _test0_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _testFixture1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _testFixture2_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);





(polybooljs__WEBPACK_IMPORTED_MODULE_1___default().polygon._tests) = {
  "no segments produces no regions": {
    input: [{
      segments: []
    }],
    assertion: function assertion(polygon) {
      return assert__WEBPACK_IMPORTED_MODULE_0___default().strictEqual(0, polygon.regions.length);
    }
  },
  "my failing segments": {
    input: [_test0_json__WEBPACK_IMPORTED_MODULE_2__],
    assertion: function assertion(polygon) {
      return assert__WEBPACK_IMPORTED_MODULE_0___default().strictEqual(polygon.regions.length > 0, true);
    }
  },
  "known good segments": {
    input: [_testFixture2_json__WEBPACK_IMPORTED_MODULE_4__],
    assertion: function assertion(polygon) {
      return assert__WEBPACK_IMPORTED_MODULE_0___default().strictEqual(polygon.regions.length > 0, true);
    }
  }
};
(polybooljs__WEBPACK_IMPORTED_MODULE_1___default().intersect._tests) = {
  "a basic intersect test": {
    input: _testFixture1_js__WEBPACK_IMPORTED_MODULE_3__.default.input,
    assertion: function assertion(intersections) {
      return assert__WEBPACK_IMPORTED_MODULE_0___default().deepStrictEqual(intersections, _testFixture1_js__WEBPACK_IMPORTED_MODULE_3__.default.output);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((polybooljs__WEBPACK_IMPORTED_MODULE_1___default()));

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * @copyright 2016 Sean Connelly (@voidqk), http://syntheti.cc
 * @license MIT
 * @preserve Project Home: https://github.com/voidqk/polybooljs
 */

var BuildLog = __webpack_require__(8);
var Epsilon = __webpack_require__(9);
var Intersecter = __webpack_require__(10);
var SegmentChainer = __webpack_require__(12);
var SegmentSelector = __webpack_require__(13);
var GeoJSON = __webpack_require__(14);

var buildLog = false;
var epsilon = Epsilon();

var PolyBool;
PolyBool = {
	// getter/setter for buildLog
	buildLog: function(bl){
		if (bl === true)
			buildLog = BuildLog();
		else if (bl === false)
			buildLog = false;
		return buildLog === false ? false : buildLog.list;
	},
	// getter/setter for epsilon
	epsilon: function(v){
		return epsilon.epsilon(v);
	},

	// core API
	segments: function(poly){
		var i = Intersecter(true, epsilon, buildLog);
		poly.regions.forEach(i.addRegion);
		return {
			segments: i.calculate(poly.inverted),
			inverted: poly.inverted
		};
	},
	combine: function(segments1, segments2){
		var i3 = Intersecter(false, epsilon, buildLog);
		return {
			combined: i3.calculate(
				segments1.segments, segments1.inverted,
				segments2.segments, segments2.inverted
			),
			inverted1: segments1.inverted,
			inverted2: segments2.inverted
		};
	},
	selectUnion: function(combined){
		return {
			segments: SegmentSelector.union(combined.combined, buildLog),
			inverted: combined.inverted1 || combined.inverted2
		}
	},
	selectIntersect: function(combined){
		return {
			segments: SegmentSelector.intersect(combined.combined, buildLog),
			inverted: combined.inverted1 && combined.inverted2
		}
	},
	selectDifference: function(combined){
		return {
			segments: SegmentSelector.difference(combined.combined, buildLog),
			inverted: combined.inverted1 && !combined.inverted2
		}
	},
	selectDifferenceRev: function(combined){
		return {
			segments: SegmentSelector.differenceRev(combined.combined, buildLog),
			inverted: !combined.inverted1 && combined.inverted2
		}
	},
	selectXor: function(combined){
		return {
			segments: SegmentSelector.xor(combined.combined, buildLog),
			inverted: combined.inverted1 !== combined.inverted2
		}
	},
	polygon: function(segments){
		return {
			regions: SegmentChainer(segments.segments, epsilon, buildLog),
			inverted: segments.inverted
		};
	},

	// GeoJSON converters
	polygonFromGeoJSON: function(geojson){
		return GeoJSON.toPolygon(PolyBool, geojson);
	},
	polygonToGeoJSON: function(poly){
		return GeoJSON.fromPolygon(PolyBool, epsilon, poly);
	},

	// helper functions for common operations
	union: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectUnion);
	},
	intersect: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectIntersect);
	},
	difference: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectDifference);
	},
	differenceRev: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectDifferenceRev);
	},
	xor: function(poly1, poly2){
		return operate(poly1, poly2, PolyBool.selectXor);
	}
};

function operate(poly1, poly2, selector){
	var seg1 = PolyBool.segments(poly1);
	var seg2 = PolyBool.segments(poly2);
	var comb = PolyBool.combine(seg1, seg2);
	var seg3 = selector(comb);
	return PolyBool.polygon(seg3);
}

if (typeof window === 'object')
	window.PolyBool = PolyBool;

module.exports = PolyBool;


/***/ }),
/* 8 */
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// used strictly for logging the processing of the algorithm... only useful if you intend on
// looking under the covers (for pretty UI's or debugging)
//

function BuildLog(){
	var my;
	var nextSegmentId = 0;
	var curVert = false;

	function push(type, data){
		my.list.push({
			type: type,
			data: data ? JSON.parse(JSON.stringify(data)) : void 0
		});
		return my;
	}

	my = {
		list: [],
		segmentId: function(){
			return nextSegmentId++;
		},
		checkIntersection: function(seg1, seg2){
			return push('check', { seg1: seg1, seg2: seg2 });
		},
		segmentChop: function(seg, end){
			push('div_seg', { seg: seg, pt: end });
			return push('chop', { seg: seg, pt: end });
		},
		statusRemove: function(seg){
			return push('pop_seg', { seg: seg });
		},
		segmentUpdate: function(seg){
			return push('seg_update', { seg: seg });
		},
		segmentNew: function(seg, primary){
			return push('new_seg', { seg: seg, primary: primary });
		},
		segmentRemove: function(seg){
			return push('rem_seg', { seg: seg });
		},
		tempStatus: function(seg, above, below){
			return push('temp_status', { seg: seg, above: above, below: below });
		},
		rewind: function(seg){
			return push('rewind', { seg: seg });
		},
		status: function(seg, above, below){
			return push('status', { seg: seg, above: above, below: below });
		},
		vert: function(x){
			if (x === curVert)
				return my;
			curVert = x;
			return push('vert', { x: x });
		},
		log: function(data){
			if (typeof data !== 'string')
				data = JSON.stringify(data, false, '  ');
			return push('log', { txt: data });
		},
		reset: function(){
			return push('reset');
		},
		selected: function(segs){
			return push('selected', { segs: segs });
		},
		chainStart: function(seg){
			return push('chain_start', { seg: seg });
		},
		chainRemoveHead: function(index, pt){
			return push('chain_rem_head', { index: index, pt: pt });
		},
		chainRemoveTail: function(index, pt){
			return push('chain_rem_tail', { index: index, pt: pt });
		},
		chainNew: function(pt1, pt2){
			return push('chain_new', { pt1: pt1, pt2: pt2 });
		},
		chainMatch: function(index){
			return push('chain_match', { index: index });
		},
		chainClose: function(index){
			return push('chain_close', { index: index });
		},
		chainAddHead: function(index, pt){
			return push('chain_add_head', { index: index, pt: pt });
		},
		chainAddTail: function(index, pt){
			return push('chain_add_tail', { index: index, pt: pt, });
		},
		chainConnect: function(index1, index2){
			return push('chain_con', { index1: index1, index2: index2 });
		},
		chainReverse: function(index){
			return push('chain_rev', { index: index });
		},
		chainJoin: function(index1, index2){
			return push('chain_join', { index1: index1, index2: index2 });
		},
		done: function(){
			return push('done');
		}
	};
	return my;
}

module.exports = BuildLog;


/***/ }),
/* 9 */
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// provides the raw computation functions that takes epsilon into account
//
// zero is defined to be between (-epsilon, epsilon) exclusive
//

function Epsilon(eps){
	if (typeof eps !== 'number')
		eps = 0.0000000001; // sane default? sure why not
	var my = {
		epsilon: function(v){
			if (typeof v === 'number')
				eps = v;
			return eps;
		},
		pointAboveOrOnLine: function(pt, left, right){
			var Ax = left[0];
			var Ay = left[1];
			var Bx = right[0];
			var By = right[1];
			var Cx = pt[0];
			var Cy = pt[1];
			return (Bx - Ax) * (Cy - Ay) - (By - Ay) * (Cx - Ax) >= -eps;
		},
		pointBetween: function(p, left, right){
			// p must be collinear with left->right
			// returns false if p == left, p == right, or left == right
			var d_py_ly = p[1] - left[1];
			var d_rx_lx = right[0] - left[0];
			var d_px_lx = p[0] - left[0];
			var d_ry_ly = right[1] - left[1];

			var dot = d_px_lx * d_rx_lx + d_py_ly * d_ry_ly;
			// if `dot` is 0, then `p` == `left` or `left` == `right` (reject)
			// if `dot` is less than 0, then `p` is to the left of `left` (reject)
			if (dot < eps)
				return false;

			var sqlen = d_rx_lx * d_rx_lx + d_ry_ly * d_ry_ly;
			// if `dot` > `sqlen`, then `p` is to the right of `right` (reject)
			// therefore, if `dot - sqlen` is greater than 0, then `p` is to the right of `right` (reject)
			if (dot - sqlen > -eps)
				return false;

			return true;
		},
		pointsSameX: function(p1, p2){
			return Math.abs(p1[0] - p2[0]) < eps;
		},
		pointsSameY: function(p1, p2){
			return Math.abs(p1[1] - p2[1]) < eps;
		},
		pointsSame: function(p1, p2){
			return my.pointsSameX(p1, p2) && my.pointsSameY(p1, p2);
		},
		pointsCompare: function(p1, p2){
			// returns -1 if p1 is smaller, 1 if p2 is smaller, 0 if equal
			if (my.pointsSameX(p1, p2))
				return my.pointsSameY(p1, p2) ? 0 : (p1[1] < p2[1] ? -1 : 1);
			return p1[0] < p2[0] ? -1 : 1;
		},
		pointsCollinear: function(pt1, pt2, pt3){
			// does pt1->pt2->pt3 make a straight line?
			// essentially this is just checking to see if the slope(pt1->pt2) === slope(pt2->pt3)
			// if slopes are equal, then they must be collinear, because they share pt2
			var dx1 = pt1[0] - pt2[0];
			var dy1 = pt1[1] - pt2[1];
			var dx2 = pt2[0] - pt3[0];
			var dy2 = pt2[1] - pt3[1];
			return Math.abs(dx1 * dy2 - dx2 * dy1) < eps;
		},
		linesIntersect: function(a0, a1, b0, b1){
			// returns false if the lines are coincident (e.g., parallel or on top of each other)
			//
			// returns an object if the lines intersect:
			//   {
			//     pt: [x, y],    where the intersection point is at
			//     alongA: where intersection point is along A,
			//     alongB: where intersection point is along B
			//   }
			//
			//  alongA and alongB will each be one of: -2, -1, 0, 1, 2
			//
			//  with the following meaning:
			//
			//    -2   intersection point is before segment's first point
			//    -1   intersection point is directly on segment's first point
			//     0   intersection point is between segment's first and second points (exclusive)
			//     1   intersection point is directly on segment's second point
			//     2   intersection point is after segment's second point
			var adx = a1[0] - a0[0];
			var ady = a1[1] - a0[1];
			var bdx = b1[0] - b0[0];
			var bdy = b1[1] - b0[1];

			var axb = adx * bdy - ady * bdx;
			if (Math.abs(axb) < eps)
				return false; // lines are coincident

			var dx = a0[0] - b0[0];
			var dy = a0[1] - b0[1];

			var A = (bdx * dy - bdy * dx) / axb;
			var B = (adx * dy - ady * dx) / axb;

			var ret = {
				alongA: 0,
				alongB: 0,
				pt: [
					a0[0] + A * adx,
					a0[1] + A * ady
				]
			};

			// categorize where intersection point is along A and B

			if (A <= -eps)
				ret.alongA = -2;
			else if (A < eps)
				ret.alongA = -1;
			else if (A - 1 <= -eps)
				ret.alongA = 0;
			else if (A - 1 < eps)
				ret.alongA = 1;
			else
				ret.alongA = 2;

			if (B <= -eps)
				ret.alongB = -2;
			else if (B < eps)
				ret.alongB = -1;
			else if (B - 1 <= -eps)
				ret.alongB = 0;
			else if (B - 1 < eps)
				ret.alongB = 1;
			else
				ret.alongB = 2;

			return ret;
		},
		pointInsideRegion: function(pt, region){
			var x = pt[0];
			var y = pt[1];
			var last_x = region[region.length - 1][0];
			var last_y = region[region.length - 1][1];
			var inside = false;
			for (var i = 0; i < region.length; i++){
				var curr_x = region[i][0];
				var curr_y = region[i][1];

				// if y is between curr_y and last_y, and
				// x is to the right of the boundary created by the line
				if ((curr_y - y > eps) != (last_y - y > eps) &&
					(last_x - curr_x) * (y - curr_y) / (last_y - curr_y) + curr_x - x > eps)
					inside = !inside

				last_x = curr_x;
				last_y = curr_y;
			}
			return inside;
		}
	};
	return my;
}

module.exports = Epsilon;


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// this is the core work-horse
//

var LinkedList = __webpack_require__(11);

function Intersecter(selfIntersection, eps, buildLog){
	// selfIntersection is true/false depending on the phase of the overall algorithm

	//
	// segment creation
	//

	function segmentNew(start, end){
		return {
			id: buildLog ? buildLog.segmentId() : -1,
			start: start,
			end: end,
			myFill: {
				above: null, // is there fill above us?
				below: null  // is there fill below us?
			},
			otherFill: null
		};
	}

	function segmentCopy(start, end, seg){
		return {
			id: buildLog ? buildLog.segmentId() : -1,
			start: start,
			end: end,
			myFill: {
				above: seg.myFill.above,
				below: seg.myFill.below
			},
			otherFill: null
		};
	}

	//
	// event logic
	//

	var event_root = LinkedList.create();

	function eventCompare(p1_isStart, p1_1, p1_2, p2_isStart, p2_1, p2_2){
		// compare the selected points first
		var comp = eps.pointsCompare(p1_1, p2_1);
		if (comp !== 0)
			return comp;
		// the selected points are the same

		if (eps.pointsSame(p1_2, p2_2)) // if the non-selected points are the same too...
			return 0; // then the segments are equal

		if (p1_isStart !== p2_isStart) // if one is a start and the other isn't...
			return p1_isStart ? 1 : -1; // favor the one that isn't the start

		// otherwise, we'll have to calculate which one is below the other manually
		return eps.pointAboveOrOnLine(p1_2,
			p2_isStart ? p2_1 : p2_2, // order matters
			p2_isStart ? p2_2 : p2_1
		) ? 1 : -1;
	}

	function eventAdd(ev, other_pt){
		event_root.insertBefore(ev, function(here){
			// should ev be inserted before here?
			var comp = eventCompare(
				ev  .isStart, ev  .pt,      other_pt,
				here.isStart, here.pt, here.other.pt
			);
			return comp < 0;
		});
	}

	function eventAddSegmentStart(seg, primary){
		var ev_start = LinkedList.node({
			isStart: true,
			pt: seg.start,
			seg: seg,
			primary: primary,
			other: null,
			status: null
		});
		eventAdd(ev_start, seg.end);
		return ev_start;
	}

	function eventAddSegmentEnd(ev_start, seg, primary){
		var ev_end = LinkedList.node({
			isStart: false,
			pt: seg.end,
			seg: seg,
			primary: primary,
			other: ev_start,
			status: null
		});
		ev_start.other = ev_end;
		eventAdd(ev_end, ev_start.pt);
	}

	function eventAddSegment(seg, primary){
		var ev_start = eventAddSegmentStart(seg, primary);
		eventAddSegmentEnd(ev_start, seg, primary);
		return ev_start;
	}

	function eventUpdateEnd(ev, end){
		// slides an end backwards
		//   (start)------------(end)    to:
		//   (start)---(end)

		if (buildLog)
			buildLog.segmentChop(ev.seg, end);

		ev.other.remove();
		ev.seg.end = end;
		ev.other.pt = end;
		eventAdd(ev.other, ev.pt);
	}

	function eventDivide(ev, pt){
		var ns = segmentCopy(pt, ev.seg.end, ev.seg);
		eventUpdateEnd(ev, pt);
		return eventAddSegment(ns, ev.primary);
	}

	function calculate(primaryPolyInverted, secondaryPolyInverted){
		// if selfIntersection is true then there is no secondary polygon, so that isn't used

		//
		// status logic
		//

		var status_root = LinkedList.create();

		function statusCompare(ev1, ev2){
			var a1 = ev1.seg.start;
			var a2 = ev1.seg.end;
			var b1 = ev2.seg.start;
			var b2 = ev2.seg.end;

			if (eps.pointsCollinear(a1, b1, b2)){
				if (eps.pointsCollinear(a2, b1, b2))
					return 1;//eventCompare(true, a1, a2, true, b1, b2);
				return eps.pointAboveOrOnLine(a2, b1, b2) ? 1 : -1;
			}
			return eps.pointAboveOrOnLine(a1, b1, b2) ? 1 : -1;
		}

		function statusFindSurrounding(ev){
			return status_root.findTransition(function(here){
				var comp = statusCompare(ev, here.ev);
				return comp > 0;
			});
		}

		function checkIntersection(ev1, ev2){
			// returns the segment equal to ev1, or false if nothing equal

			var seg1 = ev1.seg;
			var seg2 = ev2.seg;
			var a1 = seg1.start;
			var a2 = seg1.end;
			var b1 = seg2.start;
			var b2 = seg2.end;

			if (buildLog)
				buildLog.checkIntersection(seg1, seg2);

			var i = eps.linesIntersect(a1, a2, b1, b2);

			if (i === false){
				// segments are parallel or coincident

				// if points aren't collinear, then the segments are parallel, so no intersections
				if (!eps.pointsCollinear(a1, a2, b1))
					return false;
				// otherwise, segments are on top of each other somehow (aka coincident)

				if (eps.pointsSame(a1, b2) || eps.pointsSame(a2, b1))
					return false; // segments touch at endpoints... no intersection

				var a1_equ_b1 = eps.pointsSame(a1, b1);
				var a2_equ_b2 = eps.pointsSame(a2, b2);

				if (a1_equ_b1 && a2_equ_b2)
					return ev2; // segments are exactly equal

				var a1_between = !a1_equ_b1 && eps.pointBetween(a1, b1, b2);
				var a2_between = !a2_equ_b2 && eps.pointBetween(a2, b1, b2);

				// handy for debugging:
				// buildLog.log({
				//	a1_equ_b1: a1_equ_b1,
				//	a2_equ_b2: a2_equ_b2,
				//	a1_between: a1_between,
				//	a2_between: a2_between
				// });

				if (a1_equ_b1){
					if (a2_between){
						//  (a1)---(a2)
						//  (b1)----------(b2)
						eventDivide(ev2, a2);
					}
					else{
						//  (a1)----------(a2)
						//  (b1)---(b2)
						eventDivide(ev1, b2);
					}
					return ev2;
				}
				else if (a1_between){
					if (!a2_equ_b2){
						// make a2 equal to b2
						if (a2_between){
							//         (a1)---(a2)
							//  (b1)-----------------(b2)
							eventDivide(ev2, a2);
						}
						else{
							//         (a1)----------(a2)
							//  (b1)----------(b2)
							eventDivide(ev1, b2);
						}
					}

					//         (a1)---(a2)
					//  (b1)----------(b2)
					eventDivide(ev2, a1);
				}
			}
			else{
				// otherwise, lines intersect at i.pt, which may or may not be between the endpoints

				// is A divided between its endpoints? (exclusive)
				if (i.alongA === 0){
					if (i.alongB === -1) // yes, at exactly b1
						eventDivide(ev1, b1);
					else if (i.alongB === 0) // yes, somewhere between B's endpoints
						eventDivide(ev1, i.pt);
					else if (i.alongB === 1) // yes, at exactly b2
						eventDivide(ev1, b2);
				}

				// is B divided between its endpoints? (exclusive)
				if (i.alongB === 0){
					if (i.alongA === -1) // yes, at exactly a1
						eventDivide(ev2, a1);
					else if (i.alongA === 0) // yes, somewhere between A's endpoints (exclusive)
						eventDivide(ev2, i.pt);
					else if (i.alongA === 1) // yes, at exactly a2
						eventDivide(ev2, a2);
				}
			}
			return false;
		}

		//
		// main event loop
		//
		var segments = [];
		while (!event_root.isEmpty()){
			var ev = event_root.getHead();

			if (buildLog)
				buildLog.vert(ev.pt[0]);

			if (ev.isStart){

				if (buildLog)
					buildLog.segmentNew(ev.seg, ev.primary);

				var surrounding = statusFindSurrounding(ev);
				var above = surrounding.before ? surrounding.before.ev : null;
				var below = surrounding.after ? surrounding.after.ev : null;

				if (buildLog){
					buildLog.tempStatus(
						ev.seg,
						above ? above.seg : false,
						below ? below.seg : false
					);
				}

				function checkBothIntersections(){
					if (above){
						var eve = checkIntersection(ev, above);
						if (eve)
							return eve;
					}
					if (below)
						return checkIntersection(ev, below);
					return false;
				}

				var eve = checkBothIntersections();
				if (eve){
					// ev and eve are equal
					// we'll keep eve and throw away ev

					// merge ev.seg's fill information into eve.seg

					if (selfIntersection){
						var toggle; // are we a toggling edge?
						if (ev.seg.myFill.below === null)
							toggle = true;
						else
							toggle = ev.seg.myFill.above !== ev.seg.myFill.below;

						// merge two segments that belong to the same polygon
						// think of this as sandwiching two segments together, where `eve.seg` is
						// the bottom -- this will cause the above fill flag to toggle
						if (toggle)
							eve.seg.myFill.above = !eve.seg.myFill.above;
					}
					else{
						// merge two segments that belong to different polygons
						// each segment has distinct knowledge, so no special logic is needed
						// note that this can only happen once per segment in this phase, because we
						// are guaranteed that all self-intersections are gone
						eve.seg.otherFill = ev.seg.myFill;
					}

					if (buildLog)
						buildLog.segmentUpdate(eve.seg);

					ev.other.remove();
					ev.remove();
				}

				if (event_root.getHead() !== ev){
					// something was inserted before us in the event queue, so loop back around and
					// process it before continuing
					if (buildLog)
						buildLog.rewind(ev.seg);
					continue;
				}

				//
				// calculate fill flags
				//
				if (selfIntersection){
					var toggle; // are we a toggling edge?
					if (ev.seg.myFill.below === null) // if we are a new segment...
						toggle = true; // then we toggle
					else // we are a segment that has previous knowledge from a division
						toggle = ev.seg.myFill.above !== ev.seg.myFill.below; // calculate toggle

					// next, calculate whether we are filled below us
					if (!below){ // if nothing is below us...
						// we are filled below us if the polygon is inverted
						ev.seg.myFill.below = primaryPolyInverted;
					}
					else{
						// otherwise, we know the answer -- it's the same if whatever is below
						// us is filled above it
						ev.seg.myFill.below = below.seg.myFill.above;
					}

					// since now we know if we're filled below us, we can calculate whether
					// we're filled above us by applying toggle to whatever is below us
					if (toggle)
						ev.seg.myFill.above = !ev.seg.myFill.below;
					else
						ev.seg.myFill.above = ev.seg.myFill.below;
				}
				else{
					// now we fill in any missing transition information, since we are all-knowing
					// at this point

					if (ev.seg.otherFill === null){
						// if we don't have other information, then we need to figure out if we're
						// inside the other polygon
						var inside;
						if (!below){
							// if nothing is below us, then we're inside if the other polygon is
							// inverted
							inside =
								ev.primary ? secondaryPolyInverted : primaryPolyInverted;
						}
						else{ // otherwise, something is below us
							// so copy the below segment's other polygon's above
							if (ev.primary === below.primary)
								inside = below.seg.otherFill.above;
							else
								inside = below.seg.myFill.above;
						}
						ev.seg.otherFill = {
							above: inside,
							below: inside
						};
					}
				}

				if (buildLog){
					buildLog.status(
						ev.seg,
						above ? above.seg : false,
						below ? below.seg : false
					);
				}

				// insert the status and remember it for later removal
				ev.other.status = surrounding.insert(LinkedList.node({ ev: ev }));
			}
			else{
				var st = ev.status;

				if (st === null){
					throw new Error('PolyBool: Zero-length segment detected; your epsilon is ' +
						'probably too small or too large');
				}

				// removing the status will create two new adjacent edges, so we'll need to check
				// for those
				if (status_root.exists(st.prev) && status_root.exists(st.next))
					checkIntersection(st.prev.ev, st.next.ev);

				if (buildLog)
					buildLog.statusRemove(st.ev.seg);

				// remove the status
				st.remove();

				// if we've reached this point, we've calculated everything there is to know, so
				// save the segment for reporting
				if (!ev.primary){
					// make sure `seg.myFill` actually points to the primary polygon though
					var s = ev.seg.myFill;
					ev.seg.myFill = ev.seg.otherFill;
					ev.seg.otherFill = s;
				}
				segments.push(ev.seg);
			}

			// remove the event and continue
			event_root.getHead().remove();
		}

		if (buildLog)
			buildLog.done();

		return segments;
	}

	// return the appropriate API depending on what we're doing
	if (!selfIntersection){
		// performing combination of polygons, so only deal with already-processed segments
		return {
			calculate: function(segments1, inverted1, segments2, inverted2){
				// segmentsX come from the self-intersection API, or this API
				// invertedX is whether we treat that list of segments as an inverted polygon or not
				// returns segments that can be used for further operations
				segments1.forEach(function(seg){
					eventAddSegment(segmentCopy(seg.start, seg.end, seg), true);
				});
				segments2.forEach(function(seg){
					eventAddSegment(segmentCopy(seg.start, seg.end, seg), false);
				});
				return calculate(inverted1, inverted2);
			}
		};
	}

	// otherwise, performing self-intersection, so deal with regions
	return {
		addRegion: function(region){
			// regions are a list of points:
			//  [ [0, 0], [100, 0], [50, 100] ]
			// you can add multiple regions before running calculate
			var pt1;
			var pt2 = region[region.length - 1];
			for (var i = 0; i < region.length; i++){
				pt1 = pt2;
				pt2 = region[i];

				var forward = eps.pointsCompare(pt1, pt2);
				if (forward === 0) // points are equal, so we have a zero-length segment
					continue; // just skip it

				eventAddSegment(
					segmentNew(
						forward < 0 ? pt1 : pt2,
						forward < 0 ? pt2 : pt1
					),
					true
				);
			}
		},
		calculate: function(inverted){
			// is the polygon inverted?
			// returns segments
			return calculate(inverted, false);
		}
	};
}

module.exports = Intersecter;


/***/ }),
/* 11 */
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// simple linked list implementation that allows you to traverse down nodes and save positions
//

var LinkedList = {
	create: function(){
		var my = {
			root: { root: true, next: null },
			exists: function(node){
				if (node === null || node === my.root)
					return false;
				return true;
			},
			isEmpty: function(){
				return my.root.next === null;
			},
			getHead: function(){
				return my.root.next;
			},
			insertBefore: function(node, check){
				var last = my.root;
				var here = my.root.next;
				while (here !== null){
					if (check(here)){
						node.prev = here.prev;
						node.next = here;
						here.prev.next = node;
						here.prev = node;
						return;
					}
					last = here;
					here = here.next;
				}
				last.next = node;
				node.prev = last;
				node.next = null;
			},
			findTransition: function(check){
				var prev = my.root;
				var here = my.root.next;
				while (here !== null){
					if (check(here))
						break;
					prev = here;
					here = here.next;
				}
				return {
					before: prev === my.root ? null : prev,
					after: here,
					insert: function(node){
						node.prev = prev;
						node.next = here;
						prev.next = node;
						if (here !== null)
							here.prev = node;
						return node;
					}
				};
			}
		};
		return my;
	},
	node: function(data){
		data.prev = null;
		data.next = null;
		data.remove = function(){
			data.prev.next = data.next;
			if (data.next)
				data.next.prev = data.prev;
			data.prev = null;
			data.next = null;
		};
		return data;
	}
};

module.exports = LinkedList;


/***/ }),
/* 12 */
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// converts a list of segments into a list of regions, while also removing unnecessary verticies
//

function SegmentChainer(segments, eps, buildLog){
	var chains = [];
	var regions = [];

	segments.forEach(function(seg){
		var pt1 = seg.start;
		var pt2 = seg.end;
		if (eps.pointsSame(pt1, pt2)){
			console.warn('PolyBool: Warning: Zero-length segment detected; your epsilon is ' +
				'probably too small or too large');
			return;
		}

		if (buildLog)
			buildLog.chainStart(seg);

		// search for two chains that this segment matches
		var first_match = {
			index: 0,
			matches_head: false,
			matches_pt1: false
		};
		var second_match = {
			index: 0,
			matches_head: false,
			matches_pt1: false
		};
		var next_match = first_match;
		function setMatch(index, matches_head, matches_pt1){
			// return true if we've matched twice
			next_match.index = index;
			next_match.matches_head = matches_head;
			next_match.matches_pt1 = matches_pt1;
			if (next_match === first_match){
				next_match = second_match;
				return false;
			}
			next_match = null;
			return true; // we've matched twice, we're done here
		}
		for (var i = 0; i < chains.length; i++){
			var chain = chains[i];
			var head  = chain[0];
			var head2 = chain[1];
			var tail  = chain[chain.length - 1];
			var tail2 = chain[chain.length - 2];
			if (eps.pointsSame(head, pt1)){
				if (setMatch(i, true, true))
					break;
			}
			else if (eps.pointsSame(head, pt2)){
				if (setMatch(i, true, false))
					break;
			}
			else if (eps.pointsSame(tail, pt1)){
				if (setMatch(i, false, true))
					break;
			}
			else if (eps.pointsSame(tail, pt2)){
				if (setMatch(i, false, false))
					break;
			}
		}

		if (next_match === first_match){
			// we didn't match anything, so create a new chain
			chains.push([ pt1, pt2 ]);
			if (buildLog)
				buildLog.chainNew(pt1, pt2);
			return;
		}

		if (next_match === second_match){
			// we matched a single chain

			if (buildLog)
				buildLog.chainMatch(first_match.index);

			// add the other point to the apporpriate end, and check to see if we've closed the
			// chain into a loop

			var index = first_match.index;
			var pt = first_match.matches_pt1 ? pt2 : pt1; // if we matched pt1, then we add pt2, etc
			var addToHead = first_match.matches_head; // if we matched at head, then add to the head

			var chain = chains[index];
			var grow  = addToHead ? chain[0] : chain[chain.length - 1];
			var grow2 = addToHead ? chain[1] : chain[chain.length - 2];
			var oppo  = addToHead ? chain[chain.length - 1] : chain[0];
			var oppo2 = addToHead ? chain[chain.length - 2] : chain[1];

			if (eps.pointsCollinear(grow2, grow, pt)){
				// grow isn't needed because it's directly between grow2 and pt:
				// grow2 ---grow---> pt
				if (addToHead){
					if (buildLog)
						buildLog.chainRemoveHead(first_match.index, pt);
					chain.shift();
				}
				else{
					if (buildLog)
						buildLog.chainRemoveTail(first_match.index, pt);
					chain.pop();
				}
				grow = grow2; // old grow is gone... new grow is what grow2 was
			}

			if (eps.pointsSame(oppo, pt)){
				// we're closing the loop, so remove chain from chains
				chains.splice(index, 1);

				if (eps.pointsCollinear(oppo2, oppo, grow)){
					// oppo isn't needed because it's directly between oppo2 and grow:
					// oppo2 ---oppo--->grow
					if (addToHead){
						if (buildLog)
							buildLog.chainRemoveTail(first_match.index, grow);
						chain.pop();
					}
					else{
						if (buildLog)
							buildLog.chainRemoveHead(first_match.index, grow);
						chain.shift();
					}
				}

				if (buildLog)
					buildLog.chainClose(first_match.index);

				// we have a closed chain!
				regions.push(chain);
				return;
			}

			// not closing a loop, so just add it to the apporpriate side
			if (addToHead){
				if (buildLog)
					buildLog.chainAddHead(first_match.index, pt);
				chain.unshift(pt);
			}
			else{
				if (buildLog)
					buildLog.chainAddTail(first_match.index, pt);
				chain.push(pt);
			}
			return;
		}

		// otherwise, we matched two chains, so we need to combine those chains together

		function reverseChain(index){
			if (buildLog)
				buildLog.chainReverse(index);
			chains[index].reverse(); // gee, that's easy
		}

		function appendChain(index1, index2){
			// index1 gets index2 appended to it, and index2 is removed
			var chain1 = chains[index1];
			var chain2 = chains[index2];
			var tail  = chain1[chain1.length - 1];
			var tail2 = chain1[chain1.length - 2];
			var head  = chain2[0];
			var head2 = chain2[1];

			if (eps.pointsCollinear(tail2, tail, head)){
				// tail isn't needed because it's directly between tail2 and head
				// tail2 ---tail---> head
				if (buildLog)
					buildLog.chainRemoveTail(index1, tail);
				chain1.pop();
				tail = tail2; // old tail is gone... new tail is what tail2 was
			}

			if (eps.pointsCollinear(tail, head, head2)){
				// head isn't needed because it's directly between tail and head2
				// tail ---head---> head2
				if (buildLog)
					buildLog.chainRemoveHead(index2, head);
				chain2.shift();
			}

			if (buildLog)
				buildLog.chainJoin(index1, index2);
			chains[index1] = chain1.concat(chain2);
			chains.splice(index2, 1);
		}

		var F = first_match.index;
		var S = second_match.index;

		if (buildLog)
			buildLog.chainConnect(F, S);

		var reverseF = chains[F].length < chains[S].length; // reverse the shorter chain, if needed
		if (first_match.matches_head){
			if (second_match.matches_head){
				if (reverseF){
					// <<<< F <<<< --- >>>> S >>>>
					reverseChain(F);
					// >>>> F >>>> --- >>>> S >>>>
					appendChain(F, S);
				}
				else{
					// <<<< F <<<< --- >>>> S >>>>
					reverseChain(S);
					// <<<< F <<<< --- <<<< S <<<<   logically same as:
					// >>>> S >>>> --- >>>> F >>>>
					appendChain(S, F);
				}
			}
			else{
				// <<<< F <<<< --- <<<< S <<<<   logically same as:
				// >>>> S >>>> --- >>>> F >>>>
				appendChain(S, F);
			}
		}
		else{
			if (second_match.matches_head){
				// >>>> F >>>> --- >>>> S >>>>
				appendChain(F, S);
			}
			else{
				if (reverseF){
					// >>>> F >>>> --- <<<< S <<<<
					reverseChain(F);
					// <<<< F <<<< --- <<<< S <<<<   logically same as:
					// >>>> S >>>> --- >>>> F >>>>
					appendChain(S, F);
				}
				else{
					// >>>> F >>>> --- <<<< S <<<<
					reverseChain(S);
					// >>>> F >>>> --- >>>> S >>>>
					appendChain(F, S);
				}
			}
		}
	});

	return regions;
}

module.exports = SegmentChainer;


/***/ }),
/* 13 */
/***/ ((module) => {

// (c) Copyright 2016, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// filter a list of segments based on boolean operations
//

function select(segments, selection, buildLog){
	var result = [];
	segments.forEach(function(seg){
		var index =
			(seg.myFill.above ? 8 : 0) +
			(seg.myFill.below ? 4 : 0) +
			((seg.otherFill && seg.otherFill.above) ? 2 : 0) +
			((seg.otherFill && seg.otherFill.below) ? 1 : 0);
		if (selection[index] !== 0){
			// copy the segment to the results, while also calculating the fill status
			result.push({
				id: buildLog ? buildLog.segmentId() : -1,
				start: seg.start,
				end: seg.end,
				myFill: {
					above: selection[index] === 1, // 1 if filled above
					below: selection[index] === 2  // 2 if filled below
				},
				otherFill: null
			});
		}
	});

	if (buildLog)
		buildLog.selected(result);

	return result;
}

var SegmentSelector = {
	union: function(segments, buildLog){ // primary | secondary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   yes filled below    2
		//    0      0      1      0   =>   yes filled above    1
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   yes filled below    2
		//    0      1      0      1   =>   yes filled below    2
		//    0      1      1      0   =>   no                  0
		//    0      1      1      1   =>   no                  0
		//    1      0      0      0   =>   yes filled above    1
		//    1      0      0      1   =>   no                  0
		//    1      0      1      0   =>   yes filled above    1
		//    1      0      1      1   =>   no                  0
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   no                  0
		//    1      1      1      0   =>   no                  0
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 2, 1, 0,
			2, 2, 0, 0,
			1, 0, 1, 0,
			0, 0, 0, 0
		], buildLog);
	},
	intersect: function(segments, buildLog){ // primary & secondary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   no                  0
		//    0      0      1      0   =>   no                  0
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   no                  0
		//    0      1      0      1   =>   yes filled below    2
		//    0      1      1      0   =>   no                  0
		//    0      1      1      1   =>   yes filled below    2
		//    1      0      0      0   =>   no                  0
		//    1      0      0      1   =>   no                  0
		//    1      0      1      0   =>   yes filled above    1
		//    1      0      1      1   =>   yes filled above    1
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   yes filled below    2
		//    1      1      1      0   =>   yes filled above    1
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 0, 0, 0,
			0, 2, 0, 2,
			0, 0, 1, 1,
			0, 2, 1, 0
		], buildLog);
	},
	difference: function(segments, buildLog){ // primary - secondary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   no                  0
		//    0      0      1      0   =>   no                  0
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   yes filled below    2
		//    0      1      0      1   =>   no                  0
		//    0      1      1      0   =>   yes filled below    2
		//    0      1      1      1   =>   no                  0
		//    1      0      0      0   =>   yes filled above    1
		//    1      0      0      1   =>   yes filled above    1
		//    1      0      1      0   =>   no                  0
		//    1      0      1      1   =>   no                  0
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   yes filled above    1
		//    1      1      1      0   =>   yes filled below    2
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 0, 0, 0,
			2, 0, 2, 0,
			1, 1, 0, 0,
			0, 1, 2, 0
		], buildLog);
	},
	differenceRev: function(segments, buildLog){ // secondary - primary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   yes filled below    2
		//    0      0      1      0   =>   yes filled above    1
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   no                  0
		//    0      1      0      1   =>   no                  0
		//    0      1      1      0   =>   yes filled above    1
		//    0      1      1      1   =>   yes filled above    1
		//    1      0      0      0   =>   no                  0
		//    1      0      0      1   =>   yes filled below    2
		//    1      0      1      0   =>   no                  0
		//    1      0      1      1   =>   yes filled below    2
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   no                  0
		//    1      1      1      0   =>   no                  0
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 2, 1, 0,
			0, 0, 1, 1,
			0, 2, 0, 2,
			0, 0, 0, 0
		], buildLog);
	},
	xor: function(segments, buildLog){ // primary ^ secondary
		// above1 below1 above2 below2    Keep?               Value
		//    0      0      0      0   =>   no                  0
		//    0      0      0      1   =>   yes filled below    2
		//    0      0      1      0   =>   yes filled above    1
		//    0      0      1      1   =>   no                  0
		//    0      1      0      0   =>   yes filled below    2
		//    0      1      0      1   =>   no                  0
		//    0      1      1      0   =>   no                  0
		//    0      1      1      1   =>   yes filled above    1
		//    1      0      0      0   =>   yes filled above    1
		//    1      0      0      1   =>   no                  0
		//    1      0      1      0   =>   no                  0
		//    1      0      1      1   =>   yes filled below    2
		//    1      1      0      0   =>   no                  0
		//    1      1      0      1   =>   yes filled above    1
		//    1      1      1      0   =>   yes filled below    2
		//    1      1      1      1   =>   no                  0
		return select(segments, [
			0, 2, 1, 0,
			2, 0, 0, 1,
			1, 0, 0, 2,
			0, 1, 2, 0
		], buildLog);
	}
};

module.exports = SegmentSelector;


/***/ }),
/* 14 */
/***/ ((module) => {

// (c) Copyright 2017, Sean Connelly (@voidqk), http://syntheti.cc
// MIT License
// Project Home: https://github.com/voidqk/polybooljs

//
// convert between PolyBool polygon format and GeoJSON formats (Polygon and MultiPolygon)
//

var GeoJSON = {
	// convert a GeoJSON object to a PolyBool polygon
	toPolygon: function(PolyBool, geojson){

		// converts list of LineString's to segments
		function GeoPoly(coords){
			// check for empty coords
			if (coords.length <= 0)
				return PolyBool.segments({ inverted: false, regions: [] });

			// convert LineString to segments
			function LineString(ls){
				// remove tail which should be the same as head
				var reg = ls.slice(0, ls.length - 1);
				return PolyBool.segments({ inverted: false, regions: [reg] });
			}

			// the first LineString is considered the outside
			var out = LineString(coords[0]);

			// the rest of the LineStrings are considered interior holes, so subtract them from the
			// current result
			for (var i = 1; i < coords.length; i++)
				out = PolyBool.selectDifference(PolyBool.combine(out, LineString(coords[i])));

			return out;
		}

		if (geojson.type === 'Polygon'){
			// single polygon, so just convert it and we're done
			return PolyBool.polygon(GeoPoly(geojson.coordinates));
		}
		else if (geojson.type === 'MultiPolygon'){
			// multiple polygons, so union all the polygons together
			var out = PolyBool.segments({ inverted: false, regions: [] });
			for (var i = 0; i < geojson.coordinates.length; i++)
				out = PolyBool.selectUnion(PolyBool.combine(out, GeoPoly(geojson.coordinates[i])));
			return PolyBool.polygon(out);
		}
		throw new Error('PolyBool: Cannot convert GeoJSON object to PolyBool polygon');
	},

	// convert a PolyBool polygon to a GeoJSON object
	fromPolygon: function(PolyBool, eps, poly){
		// make sure out polygon is clean
		poly = PolyBool.polygon(PolyBool.segments(poly));

		// test if r1 is inside r2
		function regionInsideRegion(r1, r2){
			// we're guaranteed no lines intersect (because the polygon is clean), but a vertex
			// could be on the edge -- so we just average pt[0] and pt[1] to produce a point on the
			// edge of the first line, which cannot be on an edge
			return eps.pointInsideRegion([
				(r1[0][0] + r1[1][0]) * 0.5,
				(r1[0][1] + r1[1][1]) * 0.5
			], r2);
		}

		// calculate inside heirarchy
		//
		//  _____________________   _______    roots -> A       -> F
		// |          A          | |   F   |            |          |
		// |  _______   _______  | |  ___  |            +-- B      +-- G
		// | |   B   | |   C   | | | |   | |            |   |
		// | |  ___  | |  ___  | | | |   | |            |   +-- D
		// | | | D | | | | E | | | | | G | |            |
		// | | |___| | | |___| | | | |   | |            +-- C
		// | |_______| |_______| | | |___| |                |
		// |_____________________| |_______|                +-- E

		function newNode(region){
			return {
				region: region,
				children: []
			};
		}

		var roots = newNode(null);

		function addChild(root, region){
			// first check if we're inside any children
			for (var i = 0; i < root.children.length; i++){
				var child = root.children[i];
				if (regionInsideRegion(region, child.region)){
					// we are, so insert inside them instead
					addChild(child, region);
					return;
				}
			}

			// not inside any children, so check to see if any children are inside us
			var node = newNode(region);
			for (var i = 0; i < root.children.length; i++){
				var child = root.children[i];
				if (regionInsideRegion(child.region, region)){
					// oops... move the child beneath us, and remove them from root
					node.children.push(child);
					root.children.splice(i, 1);
					i--;
				}
			}

			// now we can add ourselves
			root.children.push(node);
		}

		// add all regions to the root
		for (var i = 0; i < poly.regions.length; i++){
			var region = poly.regions[i];
			if (region.length < 3) // regions must have at least 3 points (sanity check)
				continue;
			addChild(roots, region);
		}

		// with our heirarchy, we can distinguish between exterior borders, and interior holes
		// the root nodes are exterior, children are interior, children's children are exterior,
		// children's children's children are interior, etc

		// while we're at it, exteriors are counter-clockwise, and interiors are clockwise

		function forceWinding(region, clockwise){
			// first, see if we're clockwise or counter-clockwise
			// https://en.wikipedia.org/wiki/Shoelace_formula
			var winding = 0;
			var last_x = region[region.length - 1][0];
			var last_y = region[region.length - 1][1];
			var copy = [];
			for (var i = 0; i < region.length; i++){
				var curr_x = region[i][0];
				var curr_y = region[i][1];
				copy.push([curr_x, curr_y]); // create a copy while we're at it
				winding += curr_y * last_x - curr_x * last_y;
				last_x = curr_x;
				last_y = curr_y;
			}
			// this assumes Cartesian coordinates (Y is positive going up)
			var isclockwise = winding < 0;
			if (isclockwise !== clockwise)
				copy.reverse();
			// while we're here, the last point must be the first point...
			copy.push([copy[0][0], copy[0][1]]);
			return copy;
		}

		var geopolys = [];

		function addExterior(node){
			var poly = [forceWinding(node.region, false)];
			geopolys.push(poly);
			// children of exteriors are interior
			for (var i = 0; i < node.children.length; i++)
				poly.push(getInterior(node.children[i]));
		}

		function getInterior(node){
			// children of interiors are exterior
			for (var i = 0; i < node.children.length; i++)
				addExterior(node.children[i]);
			// return the clockwise interior
			return forceWinding(node.region, true);
		}

		// root nodes are exterior
		for (var i = 0; i < roots.children.length; i++)
			addExterior(roots.children[i]);

		// lastly, construct the approrpriate GeoJSON object

		if (geopolys.length <= 0) // empty GeoJSON Polygon
			return { type: 'Polygon', coordinates: [] };
		if (geopolys.length == 1) // use a GeoJSON Polygon
			return { type: 'Polygon', coordinates: geopolys[0] };
		return { // otherwise, use a GeoJSON MultiPolygon
			type: 'MultiPolygon',
			coordinates: geopolys
		};
	}
};

module.exports = GeoJSON;


/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"segments":[{"id":-1,"start":[36,11.000000000000002],"end":[36,10],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[36,10],"end":[36,8.999999999999998],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[36,8.999999999999996],"end":[36,7.999999999999992],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[36.00000000000001,8],"end":[37.00000000000001,8],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[37.00000000000001,8],"end":[38.00000000000001,8],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[38.00000000000001,8],"end":[39,8],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[39,8],"end":[39.99999999999999,8],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[39.99999999999999,8],"end":[40.99999999999999,8],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[47.95652173913041,0],"end":[47.999999999999986,0],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[47.99999999999999,0],"end":[49.00000000000003,0],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[49.00000000000003,0],"end":[49.99999999999998,0],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,-1.825146777013875e-14],"end":[50,1.0000000000000373],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,1.0000000000000373],"end":[50,1.9999999999999944],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,1.9999999999999944],"end":[50,2.999999999999968],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,2.999999999999968],"end":[50,4.000000000000002],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,4.000000000000002],"end":[50,5.000000000000007],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,5.000000000000007],"end":[50,5.999999999999993],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,5.999999999999993],"end":[50,6.9999999999999964],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,6.9999999999999964],"end":[50,8.000000000000007],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,8.000000000000007],"end":[50,8.999999999999996],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,8.999999999999996],"end":[50,10.000000000000009],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,10.000000000000009],"end":[50,10.999999999999991],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,10.999999999999991],"end":[50,11.999999999999996],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,11.999999999999996],"end":[50,12.999999999999996],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,12.999999999999996],"end":[50,13.999999999999986],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,13.999999999999986],"end":[50,15.000000000000018],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,15.000000000000018],"end":[50,16.000000000000004],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,16.000000000000004],"end":[50,17.00000000000002],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,17.00000000000002],"end":[50,18.00000000000003],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,18.00000000000003],"end":[50,18.999999999999982],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,18.999999999999982],"end":[50,20.000000000000004],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,20.000000000000004],"end":[50,21.000000000000057],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,21.000000000000057],"end":[50,21.999999999999986],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,21.999999999999986],"end":[50,22.999999999999982],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,22.999999999999982],"end":[50,24.00000000000002],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,24.00000000000002],"end":[50,25.000000000000057],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,25.000000000000057],"end":[50,26.00000000000004],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,26.00000000000004],"end":[50,27.00000000000008],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,27.00000000000008],"end":[50,27.999999999999975],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,27.999999999999975],"end":[50,28.999999999999872],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,28.999999999999872],"end":[50,30.000000000000085],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,30.000000000000085],"end":[50,30.999999999999957],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,30.999999999999957],"end":[50,31.999999999999893],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,31.999999999999893],"end":[50,33.00000000000009],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,33.00000000000009],"end":[50,34.00000000000011],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,34.00000000000011],"end":[50,35.000000000000014],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,35.000000000000014],"end":[50,35.99999999999986],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,35.99999999999986],"end":[50,36.99999999999994],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,36.99999999999994],"end":[50,38.000000000000156],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,38.000000000000156],"end":[50,39.00000000000013],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,39.00000000000013],"end":[50,40.00000000000018],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,40.00000000000018],"end":[50,40.999999999999766],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,40.999999999999766],"end":[50,42.00000000000031],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,42.00000000000031],"end":[50,43.00000000000034],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,43.000000000000334],"end":[50,43.999999999999616],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[50,43.999999999999616],"end":[50,44.583333333333584],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[44.99999999999996,29],"end":[43.999999999999964,29],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[43.999999999999964,29],"end":[42.999999999999964,29],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[42.999999999999964,29],"end":[41.999999999999936,29],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[41.999999999999936,29],"end":[40.99999999999995,29],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[40.99999999999995,29],"end":[40.00000000000004,29],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[40.00000000000004,29],"end":[39,29],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[39,25],"end":[37.99999999999999,25],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[37.99999999999999,25],"end":[36.999999999999986,25],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[36.999999999999986,25],"end":[35.99999999999994,25],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[35.99999999999994,25],"end":[35.00000000000004,25],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[35.00000000000004,25],"end":[34,25],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[34,25],"end":[33.00000000000003,25],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[33.00000000000003,25],"end":[32.562043795620454,25],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[33,24.00000000000003],"end":[33,22.999999999999996],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[33,22.999999999999996],"end":[33,22.000000000000014],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[33,22.000000000000014],"end":[33,20.99999999999991],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[33,20.99999999999991],"end":[33,20.350000000000037],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[35,17.000000000000025],"end":[35,16.000000000000036],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[35,16.000000000000036],"end":[35,15.000000000000027],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[35,15.000000000000027],"end":[35,13.999999999999996],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[34.99999999999999,14],"end":[34,14],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[34,13.999999999999998],"end":[34,13.133333333333338],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[36,12.000000000000004],"end":[36,11.000000000000002],"myFill":{"above":true,"below":false},"otherFill":null}],"inverted":false}');

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  input: [{
    regions: [[[50, 50], [150, 150], [190, 50]], [[130, 50], [290, 150], [290, 50]]],
    inverted: false
  }, {
    regions: [[[110, 20], [110, 110], [20, 20]], [[130, 170], [130, 20], [260, 20], [260, 170]]],
    inverted: false
  }],
  output: {
    regions: [[[50, 50], [110, 50], [110, 110]], [[178, 80], [130, 50], [130, 130], [150, 150]], [[178, 80], [190, 50], [260, 50], [260, 131.25]]],
    inverted: false
  }
});

/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"segments":[{"id":-1,"start":[5,5],"end":[11,5],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[11,5],"end":[11,11],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[5,5],"end":[11,11],"myFill":{"above":false,"below":true},"otherFill":null},{"id":-1,"start":[13,5],"end":[13,13],"myFill":{"above":false,"below":true},"otherFill":null},{"id":-1,"start":[13,13],"end":[15,15],"myFill":{"above":false,"below":true},"otherFill":null},{"id":-1,"start":[13,5],"end":[17.8,8],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[15,15],"end":[17.8,8],"myFill":{"above":false,"below":true},"otherFill":null},{"id":-1,"start":[17.8,8],"end":[19,5],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[19,5],"end":[26,5],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[26,5],"end":[26,13.125],"myFill":{"above":true,"below":false},"otherFill":null},{"id":-1,"start":[17.8,8],"end":[26,13.125],"myFill":{"above":false,"below":true},"otherFill":null}],"inverted":false}');

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var objectKeys = __webpack_require__(19);
var isArguments = __webpack_require__(22);
var is = __webpack_require__(31);
var isRegex = __webpack_require__(36);
var flags = __webpack_require__(37);
var isArray = __webpack_require__(41);
var isDate = __webpack_require__(42);
var whichBoxedPrimitive = __webpack_require__(43);
var GetIntrinsic = __webpack_require__(24);
var callBound = __webpack_require__(23);
var whichCollection = __webpack_require__(49);
var getIterator = __webpack_require__(54);
var getSideChannel = __webpack_require__(56);
var whichTypedArray = __webpack_require__(59);
var assign = __webpack_require__(65);

var $getTime = callBound('Date.prototype.getTime');
var gPO = Object.getPrototypeOf;
var $objToString = callBound('Object.prototype.toString');

var $Set = GetIntrinsic('%Set%', true);
var $mapHas = callBound('Map.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSize = callBound('Map.prototype.size', true);
var $setAdd = callBound('Set.prototype.add', true);
var $setDelete = callBound('Set.prototype.delete', true);
var $setHas = callBound('Set.prototype.has', true);
var $setSize = callBound('Set.prototype.size', true);

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414
function setHasEqualElement(set, val1, opts, channel) {
  var i = getIterator(set);
  var result;
  while ((result = i.next()) && !result.done) {
    if (internalDeepEqual(val1, result.value, opts, channel)) { // eslint-disable-line no-use-before-define
      // Remove the matching element to make sure we do not check that again.
      $setDelete(set, result.value);
      return true;
    }
  }

  return false;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439
function findLooseMatchingPrimitives(prim) {
  if (typeof prim === 'undefined') {
    return null;
  }
  if (typeof prim === 'object') { // Only pass in null as object!
    return void 0;
  }
  if (typeof prim === 'symbol') {
    return false;
  }
  if (typeof prim === 'string' || typeof prim === 'number') {
    // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.
    return +prim === +prim; // eslint-disable-line no-implicit-coercion
  }
  return true;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460
function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }
  var curB = $mapGet(b, altValue);
  var looseOpts = assign({}, opts, { strict: false });
  if (
    (typeof curB === 'undefined' && !$mapHas(b, altValue))
    // eslint-disable-next-line no-use-before-define
    || !internalDeepEqual(item, curB, looseOpts, channel)
  ) {
    return false;
  }
  // eslint-disable-next-line no-use-before-define
  return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447
function setMightHaveLoosePrim(a, b, prim) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }

  return $setHas(b, altValue) && !$setHas(a, altValue);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533
function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
  var i = getIterator(set);
  var result;
  var key2;
  while ((result = i.next()) && !result.done) {
    key2 = result.value;
    if (
      // eslint-disable-next-line no-use-before-define
      internalDeepEqual(key1, key2, opts, channel)
      // eslint-disable-next-line no-use-before-define
      && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)
    ) {
      $setDelete(set, key2);
      return true;
    }
  }

  return false;
}

function internalDeepEqual(actual, expected, options, channel) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  var actualBoxed = whichBoxedPrimitive(actual);
  var expectedBoxed = whichBoxedPrimitive(expected);
  if (actualBoxed !== expectedBoxed) {
    return false;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration

  var hasActual = channel.has(actual);
  var hasExpected = channel.has(expected);
  var sentinel;
  if (hasActual && hasExpected) {
    if (channel.get(actual) === channel.get(expected)) {
      return true;
    }
  } else {
    sentinel = {};
  }
  if (!hasActual) { channel.set(actual, sentinel); }
  if (!hasExpected) { channel.set(expected, sentinel); }

  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts, channel);
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }

  return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
}

function setEquiv(a, b, opts, channel) {
  if ($setSize(a) !== $setSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  while ((resultA = iA.next()) && !resultA.done) {
    if (resultA.value && typeof resultA.value === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    } else if (!$setHas(b, resultA.value)) {
      if (opts.strict) { return false; }
      if (!setMightHaveLoosePrim(a, b, resultA.value)) {
        return false;
      }
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    }
  }
  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      // We have to check if a primitive value is already matching and only if it's not, go hunting for it.
      if (resultB.value && typeof resultB.value === 'object') {
        if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && !$setHas(a, resultB.value)
        && !setHasEqualElement(set, resultB.value, opts.strict, channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function mapEquiv(a, b, opts, channel) {
  if ($mapSize(a) !== $mapSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  var key;
  var item1;
  var item2;
  while ((resultA = iA.next()) && !resultA.done) {
    key = resultA.value[0];
    item1 = resultA.value[1];
    if (key && typeof key === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, key);
    } else {
      item2 = $mapGet(b, key);
      if ((typeof item2 === 'undefined' && !$mapHas(b, key)) || !internalDeepEqual(item1, item2, opts, channel)) {
        if (opts.strict) {
          return false;
        }
        if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {
          return false;
        }
        if (!set) { set = new $Set(); }
        $setAdd(set, key);
      }
    }
  }

  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      key = resultB.value[0];
      item2 = resultB.value[1];
      if (key && typeof key === 'object') {
        if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel))
        && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, { strict: false }), channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function objEquiv(a, b, opts, channel) {
  /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5] */
  var i, key;

  if (typeof a !== typeof b) { return false; }
  if (a == null || b == null) { return false; }

  if ($objToString(a) !== $objToString(b)) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsArray = isArray(a);
  var bIsArray = isArray(b);
  if (aIsArray !== bIsArray) { return false; }

  // TODO: replace when a cross-realm brand check is available
  var aIsError = a instanceof Error;
  var bIsError = b instanceof Error;
  if (aIsError !== bIsError) { return false; }
  if (aIsError || bIsError) {
    if (a.name !== b.name || a.message !== b.message) { return false; }
  }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {
    return false;
  }

  var aIsDate = isDate(a);
  var bIsDate = isDate(b);
  if (aIsDate !== bIsDate) { return false; }
  if (aIsDate || bIsDate) { // && would work too, because both are true or both false here
    if ($getTime(a) !== $getTime(b)) { return false; }
  }
  if (opts.strict && gPO && gPO(a) !== gPO(b)) { return false; }

  if (whichTypedArray(a) !== whichTypedArray(b)) {
    return false;
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  var ka = objectKeys(a);
  var kb = objectKeys(b);
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; } // eslint-disable-line eqeqeq
  }

  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!internalDeepEqual(a[key], b[key], opts, channel)) { return false; }
  }

  var aCollection = whichCollection(a);
  var bCollection = whichCollection(b);
  if (aCollection !== bCollection) {
    return false;
  }
  if (aCollection === 'Set' || bCollection === 'Set') { // aCollection === bCollection
    return setEquiv(a, b, opts, channel);
  }
  if (aCollection === 'Map') { // aCollection === bCollection
    return mapEquiv(a, b, opts, channel);
  }

  return true;
}

module.exports = function deepEqual(a, b, opts) {
  return internalDeepEqual(a, b, opts, getSideChannel());
};


/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(20);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(21);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 20 */
/***/ ((module) => {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(20); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var callBound = __webpack_require__(23);

var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString(value) !== '[object Array]' &&
		$toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(24);

var callBind = __webpack_require__(30);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(25)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(27);
var hasOwn = __webpack_require__(29);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(26);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),
/* 26 */
/***/ ((module) => {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(28);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 28 */
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(27);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(27);
var GetIntrinsic = __webpack_require__(24);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(32);
var callBind = __webpack_require__(30);

var implementation = __webpack_require__(33);
var getPolyfill = __webpack_require__(34);
var shim = __webpack_require__(35);

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keys = __webpack_require__(19);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 33 */
/***/ ((module) => {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(33);

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),
/* 35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getPolyfill = __webpack_require__(34);
var define = __webpack_require__(32);

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(23);
var hasSymbols = __webpack_require__(25)();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';
var has;
var $exec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	has = callBound('Object.prototype.hasOwnProperty');
	$exec = callBound('RegExp.prototype.exec');
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var $toString = callBound('Object.prototype.toString');
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			$exec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};


/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(32);
var callBind = __webpack_require__(30);

var implementation = __webpack_require__(38);
var getPolyfill = __webpack_require__(39);
var shim = __webpack_require__(40);

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),
/* 38 */
/***/ ((module) => {

"use strict";


var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(38);

var supportsDescriptors = __webpack_require__(32).supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var supportsDescriptors = __webpack_require__(32).supportsDescriptors;
var getPolyfill = __webpack_require__(39);
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),
/* 41 */
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 42 */
/***/ ((module) => {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isString = __webpack_require__(44);
var isNumber = __webpack_require__(45);
var isBoolean = __webpack_require__(46);
var isSymbol = __webpack_require__(47);
var isBigInt = __webpack_require__(48);

// eslint-disable-next-line consistent-return
module.exports = function whichBoxedPrimitive(value) {
	// eslint-disable-next-line eqeqeq
	if (value == null || (typeof value !== 'object' && typeof value !== 'function')) {
		return null;
	}
	if (isString(value)) {
		return 'String';
	}
	if (isNumber(value)) {
		return 'Number';
	}
	if (isBoolean(value)) {
		return 'Boolean';
	}
	if (isSymbol(value)) {
		return 'Symbol';
	}
	if (isBigInt(value)) {
		return 'BigInt';
	}
};


/***/ }),
/* 44 */
/***/ ((module) => {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 45 */
/***/ ((module) => {

"use strict";


var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};


/***/ }),
/* 46 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(23);
var $boolToStr = callBound('Boolean.prototype.toString');
var $toString = callBound('Object.prototype.toString');

var tryBooleanObject = function booleanBrandCheck(value) {
	try {
		$boolToStr(value);
		return true;
	} catch (e) {
		return false;
	}
};
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') {
		return true;
	}
	if (value === null || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : $toString(value) === boolClass;
};


/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(25)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && 0;
	};
}


/***/ }),
/* 48 */
/***/ ((module) => {

"use strict";


if (typeof BigInt === 'function') {
	var bigIntValueOf = BigInt.prototype.valueOf;
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') {
			return true;
		}

		return tryBigInt(value);
	};
} else {
	module.exports = function isBigInt(value) {
		return  false && 0;
	};
}


/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isMap = __webpack_require__(50);
var isSet = __webpack_require__(51);
var isWeakMap = __webpack_require__(52);
var isWeakSet = __webpack_require__(53);

module.exports = function whichCollection(value) {
	if (value && typeof value === 'object') {
		if (isMap(value)) {
			return 'Map';
		}
		if (isSet(value)) {
			return 'Set';
		}
		if (isWeakMap(value)) {
			return 'WeakMap';
		}
		if (isWeakSet(value)) {
			return 'WeakSet';
		}
	}
	return false;
};


/***/ }),
/* 50 */
/***/ ((module) => {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Map) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x);
		if ($setHas) {
			try {
				$setHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Map; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),
/* 51 */
/***/ ((module) => {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Set) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x);
		if ($mapHas) {
			try {
				$mapHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Set; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),
/* 52 */
/***/ ((module) => {

"use strict";


var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isWeakMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x, $mapHas);
		if ($setHas) {
			try {
				$setHas.call(x, $setHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakMap; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};


/***/ }),
/* 53 */
/***/ ((module) => {

"use strict";


var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakSet(x) {
		// `WeakSet` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	module.exports = function isWeakSet(x) {
		// `WeakSet` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isWeakSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x, $setHas);
		if ($mapHas) {
			try {
				$mapHas.call(x, $mapHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakSet; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};


/***/ }),
/* 54 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint global-require: 0 */
// the code is structured this way so that bundlers can
// alias out `has-symbols` to `() => true` or `() => false` if your target
// environments' Symbol capabilities are known, and then use
// dead code elimination on the rest of this module.
//
// Similarly, `isarray` can be aliased to `Array.isArray` if
// available in all target environments.

var isArguments = __webpack_require__(22);

if (__webpack_require__(25)() || __webpack_require__(26)()) {
	var $iterator = Symbol.iterator;
	// Symbol is available natively or shammed
	// natively:
	//  - Chrome >= 38
	//  - Edge 12-14?, Edge >= 15 for sure
	//  - FF >= 36
	//  - Safari >= 9
	//  - node >= 0.12
	module.exports = function getIterator(iterable) {
		// alternatively, `iterable[$iterator]?.()`
		if (iterable != null && typeof iterable[$iterator] !== 'undefined') {
			return iterable[$iterator]();
		}
		if (isArguments(iterable)) {
			// arguments objects lack Symbol.iterator
			// - node 0.12
			return Array.prototype[$iterator].call(iterable);
		}
	};
} else {
	// Symbol is not available, native or shammed
	var isArray = __webpack_require__(55);
	var isString = __webpack_require__(44);
	var GetIntrinsic = __webpack_require__(24);
	var $Map = GetIntrinsic('%Map%', true);
	var $Set = GetIntrinsic('%Set%', true);
	var callBound = __webpack_require__(23);
	var $arrayPush = callBound('Array.prototype.push');
	var $charCodeAt = callBound('String.prototype.charCodeAt');
	var $stringSlice = callBound('String.prototype.slice');

	var advanceStringIndex = function advanceStringIndex(S, index) {
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}

		var first = $charCodeAt(S, index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}

		var second = $charCodeAt(S, index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}

		return index + 2;
	};

	var getArrayIterator = function getArrayIterator(arraylike) {
		var i = 0;
		return {
			next: function next() {
				var done = i >= arraylike.length;
				var value;
				if (!done) {
					value = arraylike[i];
					i += 1;
				}
				return {
					done: done,
					value: value
				};
			}
		};
	};

	var getNonCollectionIterator = function getNonCollectionIterator(iterable, noPrimordialCollections) {
		if (isArray(iterable) || isArguments(iterable)) {
			return getArrayIterator(iterable);
		}
		if (isString(iterable)) {
			var i = 0;
			return {
				next: function next() {
					var nextIndex = advanceStringIndex(iterable, i);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					return {
						done: nextIndex > iterable.length,
						value: value
					};
				}
			};
		}

		// es6-shim and es-shims' es-map use a string "_es6-shim iterator_" property on different iterables, such as MapIterator.
		if (noPrimordialCollections && typeof iterable['_es6-shim iterator_'] !== 'undefined') {
			return iterable['_es6-shim iterator_']();
		}
	};

	if (!$Map && !$Set) {
		// the only language iterables are Array, String, arguments
		// - Safari <= 6.0
		// - Chrome < 38
		// - node < 0.12
		// - FF < 13
		// - IE < 11
		// - Edge < 11

		module.exports = function getIterator(iterable) {
			if (iterable != null) {
				return getNonCollectionIterator(iterable, true);
			}
		};
	} else {
		// either Map or Set are available, but Symbol is not
		// - es6-shim on an ES5 browser
		// - Safari 6.2 (maybe 6.1?)
		// - FF v[13, 36)
		// - IE 11
		// - Edge 11
		// - Safari v[6, 9)

		var isMap = __webpack_require__(50);
		var isSet = __webpack_require__(51);

		// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
		var $mapForEach = callBound('Map.prototype.forEach', true);
		var $setForEach = callBound('Set.prototype.forEach', true);
		if (typeof process === 'undefined' || !process.versions || !process.versions.node) { // "if is not node"

			// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either
			// returns a value, or throws a StopIteration object. These browsers
			// do not have any other mechanism for iteration.
			var $mapIterator = callBound('Map.prototype.iterator', true);
			var $setIterator = callBound('Set.prototype.iterator', true);
			var getStopIterationIterator = function (iterator) {
				var done = false;
				return {
					next: function next() {
						try {
							return {
								done: done,
								value: done ? undefined : iterator.next()
							};
						} catch (e) {
							done = true;
							return {
								done: true,
								value: undefined
							};
						}
					}
				};
			};
		}
		// Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
		// this returns a proper iterator object, so we should use it instead of forEach.
		// newer es6-shim versions use a string "_es6-shim iterator_" property.
		var $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);
		var $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);

		var getCollectionIterator = function getCollectionIterator(iterable) {
			if (isMap(iterable)) {
				if ($mapIterator) {
					return getStopIterationIterator($mapIterator(iterable));
				}
				if ($mapAtAtIterator) {
					return $mapAtAtIterator(iterable);
				}
				if ($mapForEach) {
					var entries = [];
					$mapForEach(iterable, function (v, k) {
						$arrayPush(entries, [k, v]);
					});
					return getArrayIterator(entries);
				}
			}
			if (isSet(iterable)) {
				if ($setIterator) {
					return getStopIterationIterator($setIterator(iterable));
				}
				if ($setAtAtIterator) {
					return $setAtAtIterator(iterable);
				}
				if ($setForEach) {
					var values = [];
					$setForEach(iterable, function (v) {
						$arrayPush(values, v);
					});
					return getArrayIterator(values);
				}
			}
		};

		module.exports = function getIterator(iterable) {
			return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
		};
	}
}


/***/ }),
/* 55 */
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 56 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(24);
var callBound = __webpack_require__(23);
var inspect = __webpack_require__(57);

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),
/* 57 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' ? Symbol.prototype.toString : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var inspectCustom = __webpack_require__(58).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = symToString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        if (ys.length === 0) { return '{}'; }
        if (indent) {
            return '{' + indentedJoin(ys, indent) + '}';
        }
        return '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]'; }
function isDate(obj) { return toStr(obj) === '[object Date]'; }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }
function isError(obj) { return toStr(obj) === '[object Error]'; }
function isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }
function isString(obj) { return toStr(obj) === '[object String]'; }
function isNumber(obj) { return toStr(obj) === '[object Number]'; }
function isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        var syms = gOPS(obj);
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),
/* 58 */
/***/ (() => {

/* (ignored) */

/***/ }),
/* 59 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var forEach = __webpack_require__(60);
var availableTypedArrays = __webpack_require__(61);
var callBound = __webpack_require__(23);

var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__(25)();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';

var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __webpack_require__(63);
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof __webpack_require__.g[typedArray] === 'function') {
			var arr = new __webpack_require__.g[typedArray]();
			if (!(Symbol.toStringTag in arr)) {
				throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
			}
			var proto = getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __webpack_require__(64);

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag) { return $slice($toString(value), 8, -1); }
	return tryTypedArrays(value);
};


/***/ }),
/* 60 */
/***/ ((module) => {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 61 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var filter = __webpack_require__(62);

module.exports = function availableTypedArrays() {
	return filter([
		'BigInt64Array',
		'BigUint64Array',
		'Float32Array',
		'Float64Array',
		'Int16Array',
		'Int32Array',
		'Int8Array',
		'Uint16Array',
		'Uint32Array',
		'Uint8Array',
		'Uint8ClampedArray'
	], function (typedArray) {
		return typeof __webpack_require__.g[typedArray] === 'function';
	});
};


/***/ }),
/* 62 */
/***/ ((module) => {


/**
 * Array#filter.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 * @throw TypeError
 */

module.exports = function (arr, fn, self) {
  if (arr.filter) return arr.filter(fn, self);
  if (void 0 === arr || null === arr) throw new TypeError;
  if ('function' != typeof fn) throw new TypeError;
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!hasOwn.call(arr, i)) continue;
    var val = arr[i];
    if (fn.call(self, val, i, arr)) ret.push(val);
  }
  return ret;
};

var hasOwn = Object.prototype.hasOwnProperty;


/***/ }),
/* 63 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(24);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),
/* 64 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var forEach = __webpack_require__(60);
var availableTypedArrays = __webpack_require__(61);
var callBound = __webpack_require__(23);

var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__(25)();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';

var typedArrays = availableTypedArrays();

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __webpack_require__(63);
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		var arr = new __webpack_require__.g[typedArray]();
		if (!(Symbol.toStringTag in arr)) {
			throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
		}
		var proto = getPrototypeOf(arr);
		var descriptor = gOPD(proto, Symbol.toStringTag);
		if (!descriptor) {
			var superProto = getPrototypeOf(proto);
			descriptor = gOPD(superProto, Symbol.toStringTag);
		}
		toStrTags[typedArray] = descriptor.get;
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) {
		var tag = $slice($toString(value), 8, -1);
		return $indexOf(typedArrays, tag) > -1;
	}
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};


/***/ }),
/* 65 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var defineProperties = __webpack_require__(32);
var callBind = __webpack_require__(30);

var implementation = __webpack_require__(66);
var getPolyfill = __webpack_require__(67);
var shim = __webpack_require__(68);

var polyfill = callBind.apply(getPolyfill());
// eslint-disable-next-line no-unused-vars
var bound = function assign(target, source1) {
	return polyfill(Object, arguments);
};

defineProperties(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),
/* 66 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(19);
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(26)();
var callBound = __webpack_require__(23);
var toObject = Object;
var $push = callBound('Array.prototype.push');
var $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if ($propIsEnumerable(source, key)) {
					$push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if ($propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),
/* 67 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(66);

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	/*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	/*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),
/* 68 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(32);
var getPolyfill = __webpack_require__(67);

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
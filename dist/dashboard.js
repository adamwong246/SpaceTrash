/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/exampleUserConfig/src/MultiView.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apps/client/components/CommandsV2.tsx":
/*!***************************************************!*\
  !*** ./src/apps/client/components/CommandsV2.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class Commands extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const drone = this.props.drone;
        return (React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null),
                    React.createElement("td", null,
                        React.createElement("button", { onClick: (e) => {
                                // this.props.broadcasterV2("enqueue", [{action: "FORWARD", droneId: drone.id}])
                                this.props.broadcasterV2({ action: "enqueue", payload: [{ action: "FORWARD", droneId: drone.id }] });
                            } }, " FORWARD")),
                    React.createElement("td", null)),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("button", { onClick: (e) => {
                                this.props.broadcasterV2({ action: "enqueue", payload: [{ action: "LEFT", droneId: drone.id }] });
                            } }, " LEFT")),
                    React.createElement("td", null),
                    React.createElement("td", null,
                        React.createElement("button", { onClick: (e) => {
                                this.props.broadcasterV2({ action: "enqueue", payload: [{ action: "RIGHT", droneId: drone.id }] });
                            } }, " RIGHT"))),
                React.createElement("tr", null,
                    React.createElement("td", null),
                    React.createElement("td", null,
                        React.createElement("button", { onClick: (e) => {
                                this.props.broadcasterV2({ action: "enqueue", payload: [{ action: "BACK", droneId: drone.id }] });
                            } }, " BACK")),
                    React.createElement("td", null)))));
    }
}
;
exports.default = Commands;


/***/ }),

/***/ "./src/apps/client/components/Raycast.tsx":
/*!************************************************!*\
  !*** ./src/apps/client/components/Raycast.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const walls_3_png_1 = __webpack_require__(/*! ../../../images/walls_3.png */ "./src/images/walls_3.png");
const walls_4_png_1 = __webpack_require__(/*! ../../../images/walls_4.png */ "./src/images/walls_4.png");
const raycastConsts_ts_1 = __webpack_require__(/*! ../../../raycastConsts.ts */ "./src/raycastConsts.ts");
const styleV3 = (ray, drone) => {
    const playerX = drone.x;
    const playerY = drone.y;
    const { hit, height, width, texX } = ray.style;
    return {
        position: raycastConsts_ts_1.ABSOLLUTE,
        zIndex: -((raycastConsts_ts_1.MMath.pow((ray.x - playerX), 2) + raycastConsts_ts_1.MMath.pow((ray.y - playerY), 2)) * 1000) >> 0,
        height: height,
        width: (width * 2) >> 0,
        top: raycastConsts_ts_1.MMath.round((raycastConsts_ts_1.screenHeight - height) / 2),
        left: ray.id * raycastConsts_ts_1.stripWidth - texX,
        clip: "rect( 0px, " + (texX + raycastConsts_ts_1.stripWidth) + "px, " + (height) + "px, " + texX + "px)",
        src: hit ? walls_4_png_1.default : walls_3_png_1.default
    };
};
class Raycast extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const drone = this.props.drone;
        const rays = drone.rays;
        return (React.createElement("div", { id: "screen" },
            React.createElement("div", { id: "floor" }),
            React.createElement("div", { id: "ceiling" }),
            React.createElement("div", null, rays.map((ray, ndx) => {
                if (ray) {
                    /** @type {React.CSSProperties} */
                    const style = styleV3(ray, drone);
                    return (React.createElement("img", { key: `strip-${ndx}`, src: style.src, style: style }));
                }
            }))));
    }
}
exports.default = Raycast;
;


/***/ }),

/***/ "./src/exampleUserConfig/src/MultiView.tsx":
/*!*************************************************!*\
  !*** ./src/exampleUserConfig/src/MultiView.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const Raycast_tsx_1 = __webpack_require__(/*! ../../apps/client/components/Raycast.tsx */ "./src/apps/client/components/Raycast.tsx");
const CommandsV2_tsx_1 = __webpack_require__(/*! ../../apps/client/components/CommandsV2.tsx */ "./src/apps/client/components/CommandsV2.tsx");
console.log("HELLO FROM MULTIVIEW");
class MultiView extends React.Component {
    constructor(a) {
        super(a);
    }
    render(props) {
        return (React.createElement("div", null,
            "Hello MultiView",
            (props.drones || []).map((drone) => {
                return (React.createElement("div", null,
                    React.createElement(Raycast_tsx_1.default, { drone: drone }),
                    React.createElement(CommandsV2_tsx_1.default, { drone: drone, broadcasterV2: props.broadcasterV2 })));
            }),
            React.createElement("pre", null, JSON.stringify(props, null, 2))));
    }
}
;
exports.default = MultiView;
Window.MULTIVIEW = MultiView;


/***/ }),

/***/ "./src/images/walls_3.png":
/*!********************************!*\
  !*** ./src/images/walls_3.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/walls_4.png":
/*!********************************!*\
  !*** ./src/images/walls_4.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAMAAADlCI9NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFQTFRFNykUUTYbbEUnSTAYkFw0YT4jFhYWKCAMXEAgJB0LPS4WfVBAbwAABCpJREFUeNrU2dtiozoMBVBd2pnd/v8Hn+KrZCRDQufh0JcEmHjFMda2h74fHl8PD5KHhz486OPh8fnwIK7HN//9Znf0M/PKck99S/X4oj9f5I5+Zl5Z7mlvmUtP8sdf/sDxuT+vjz8uZ45X/QrKq+NSuaNeEKLak59/6LN87s/r44/KmePVuFJf/Vwqd2i7oQLQmssAPzdANoDeXAY43msGwNEBVwCBZAC6AxgtBgB2ACQAeQjQDCBHm+De0UXzAoBr506AvgYgKt+6NydHB8AAcAvQB9jRE9oaaEPuHoAHAHIXgBigdwEUA0o7BsAvAvQNQB36GQAZgDugjrz/MQClxRTQ58gUQG3kJYDRbAqozx0SwJx++mwZAMrnXQMoB0DMIEQIGHNFAyAFUAgwZwJAnwlxAoyOH3NFBJjfbgW4MpUAsADYA1rHj0e1AcYUaYtRBKAYMKsU1593/NJvAegRoDwHKYAzAEwxegdAthrOp34FgONAEgPoBKA7ALAB4OgSUw05DiTjApmpuFkCwCmQOMDsXl4BsGXqDYArU3cAKH0NU4w4nIoxhB7QjzPAz4TmhloNxQy12sQVoD84SrMWzNb/OYB/G4CXAcLnPPAKYDyfcGOgYBwAFwB6CuD64KcAyQDotaA2mQH0dYAEALwA0ABAGwDMiDoDkAJk/gR+vrsJGNWQ/bSzAJJAYgG6AySBJAEIt6VRFEjEFiNGBNAcQAuADKBMKqP0lLc4BxKfiCygfJ4F2LVSkogcYBajWgqFI4BPRCPHusdQtdfGq0TkAXZlVPs6AHAMwC8DpCYCuQCA7erYroza2uw2QFeArAC8BtAVQL8DgAfIQ4CeAHZhAgfgBIBwEPZQeA1YVseY810ZYVgyYQlKIcBVw7kyCSLZFjDnuxSACYDMf+LywE0AOUCdfBYAr6FUYELpGwC1odQD2jcesRytgU0oZZkZRl011J5Kt6GUTIdQn3l7Ku6T4S4RsRkSFAA0AGgG4PrlenPlF7kF4Lk/YMZ636l7GzAK8h4gGYDuAdQBZAfANUCfAXACwPRwmAnrAmrkgTPArpUuAWz2B3oH2NXiAOAuQGMAbQAwiah38GmTygDMit7uD+gZEEYyt6DmtiSOAWIA7ACY64INQO8ATOnBCIVY8oAH8ADgVwCwkawt0U8AWMB4cuEmXjMLnAC2Frh1QVuTW8BcqshMxRwC5BTJyE7OcSg1AB9IMCdi2YVSnmtDv0HhQmEeyVJA3TWNAfOeMVAigI5toj0gjmR1UqrlIAdIDhj1eAdQD4DboOiBADkA4zcwAL0PoC0AvQMkTcUNAESAEQg0zYT9N6D5n1Z2i6bVgQ2AxQXpdYtmGWM3APB7RK39voGPdacUbRRmgNa+phuVKwD1sMWI/Rm/U4o6bfB+m24tx+E95e1/AgwAszpNG5iTlKQAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/raycastConsts.ts":
/*!******************************!*\
  !*** ./src/raycastConsts.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
exports.stripWidth = 1;
exports.ABSOLLUTE = 'absolute';
exports.screenWidth = 320;
exports.screenHeight = 200;
const precision = 3;
exports.MMath = {
    round: lodash_1.memoize((a) => Math.round(a)),
    ceil: lodash_1.memoize((a) => Math.ceil(a)),
    floor: lodash_1.memoize((a) => Math.floor(a)),
    sqrt: lodash_1.memoize((a) => Math.sqrt(a.toFixed(precision))),
    pow: lodash_1.memoize((a, b) => Math.pow(a.toFixed(precision), b)),
    sin: lodash_1.memoize((a) => Math.sin(a.toFixed(precision))),
    asin: lodash_1.memoize((a) => Math.asin(a.toFixed(precision))),
    cos: lodash_1.memoize((a) => Math.cos(a.toFixed(precision))),
    tan: lodash_1.memoize((a) => Math.tan(a.toFixed(precision))),
};


/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map
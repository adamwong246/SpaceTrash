/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/exampleUserConfig/src/ship4.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/exampleUserConfig/src/ship4.js":
/*!********************************************!*\
  !*** ./src/exampleUserConfig/src/ship4.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const dumpFromCache = {

  "name": "Rocinante",
  "bots": [{
      id: 0,
      name: "Bill",
      x: 1.1,
      y: 2.2,
      direction: 3.3,
      chasis: {
        id: "tankV0"
      },
      battery: {
        id: 'batteryV0'
      },
      camera: {
        id: 'cameraV0'
      }
    },
    {
      id: 1,
      name: "Hank",
      x: 0.1,
      y: 2.3,
      direction: 3.4,
      chasis: {
        id: "tankV1"
      },
      battery: {
        id: 'batteryV2'
      },
      camera: {
        id: 'cameraV3'
      }
    }
  ],

}


const shipMap = {
  "0": {
    "0": "X",
    "1": " ",
    "2": " ",
    "3": " ",
    "4": " ",
    "5": " ",
    "6": " ",
    "7": " ",
    "8": " ",
    "9": " ",
    "10": " ",
    "11": " "
  },
  "1": {
    "0": " ",
    "1": "B",
    "2": "B",
    "3": "B",
    "4": "B",
    "5": "B",
    "6": "B",
    "7": "B",
    "8": "B",
    "9": "B",
    "10": "B",
    "11": " "
  },
  "2": {
    "0": " ",
    "1": "B",
    "2": "f",
    "3": "f",
    "4": "f",
    "5": "f",
    "6": "f",
    "7": "f",
    "8": "f",
    "9": "f",
    "10": "B",
    "11": " "
  },
  "3": {
    "0": " ",
    "1": "B",
    "2": "f",
    "3": "f",
    "4": "f",
    "5": "f",
    "6": "f",
    "7": "f",
    "8": "f",
    "9": "f",
    "10": "B",
    "11": " "
  },
  "4": {
    "0": " ",
    "1": "B",
    "2": "f",
    "3": "f",
    "4": "f",
    "5": "f",
    "6": "f",
    "7": "f",
    "8": "f",
    "9": "f",
    "10": "B",
    "11": " "
  },
  "5": {
    "0": " ",
    "1": "B",
    "2": "f",
    "3": "f",
    "4": "f",
    "5": "f",
    "6": "f",
    "7": "f",
    "8": "f",
    "9": "f",
    "10": "B",
    "11": " "
  },
  "6": {
    "0": " ",
    "1": "B",
    "2": "B",
    "3": "f",
    "4": "f",
    "5": "f",
    "6": "f",
    "7": "f",
    "8": "B",
    "9": "f",
    "10": "B",
    "11": " "
  },
  "7": {
    "0": " ",
    "1": "B",
    "2": "f",
    "3": "f",
    "4": "f",
    "5": "B",
    "6": "f",
    "7": "f",
    "8": "f",
    "9": "f",
    "10": "B",
    "11": " "
  },
  "8": {
    "0": " ",
    "1": "B",
    "2": "f",
    "3": "f",
    "4": "f",
    "5": "f",
    "6": "f",
    "7": "f",
    "8": "f",
    "9": "f",
    "10": "B",
    "11": " "
  },
  "9": {
    "0": " ",
    "1": "B",
    "2": "f",
    "3": "f",
    "4": "B",
    "5": "B",
    "6": "B",
    "7": "f",
    "8": "f",
    "9": "f",
    "10": "B",
    "11": " "
  },
  "10": {
    "0": " ",
    "1": "B",
    "2": "B",
    "3": "B",
    "4": "B",
    "5": "B",
    "6": "B",
    "7": "B",
    "8": "B",
    "9": "B",
    "10": "B",
    "11": " "
  },
  "11": {
    "0": " ",
    "1": " ",
    "2": " ",
    "3": " ",
    "4": " ",
    "5": " ",
    "6": " ",
    "7": " ",
    "8": " ",
    "9": " ",
    "10": " ",
    "11": " "
  }
}

dumpFromCache.xMin = 0
dumpFromCache.xMax = 12
dumpFromCache.yMin = 0
dumpFromCache.yMax = 12
dumpFromCache.shipMap = shipMap;

console.log(JSON.stringify(dumpFromCache, null, 2))
module.exports = dumpFromCache


/***/ })

/******/ });
//# sourceMappingURL=shipFactory.js.map
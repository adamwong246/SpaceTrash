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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/electron-main/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const electron = __webpack_require__(/*! electron */ "electron");

if (typeof electron === 'string') {
	throw new TypeError('Not running in an Electron environment!');
}

const app = electron.app || electron.remote.app;

const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

module.exports = isEnvSet ? getFromEnv : !app.isPackaged;


/***/ }),

/***/ "./src/electron-main/main.js":
/*!***********************************!*\
  !*** ./src/electron-main/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var electron_is_dev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! electron-is-dev */ "./node_modules/electron-is-dev/index.js");
/* harmony import */ var electron_is_dev__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(electron_is_dev__WEBPACK_IMPORTED_MODULE_3__);



// import findOpenSocket from './find-open-socket';


let clientWin
let serverWin
let serverProcess

function createWindow(socketName) {

  clientWin = new electron__WEBPACK_IMPORTED_MODULE_1__["BrowserWindow"]({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      // preload: "./preload.js"
      // preload: path.resolve('./dist', 'preload.js'),
      // preload: "preload.jsasdasd"
      preload: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('dist', 'preload.js'),
    },
    title: "SpaceTrash v0.0.8"
  })

  // clientWin.loadFile('client-index.html')
  clientWin.loadFile('index.html')

  clientWin.webContents.on('did-finish-load', () => {
    clientWin.webContents.send('set-socket', {
      name: socketName
    })
  })
}

// function createBackgroundWindow(socketName) {
//   const win = new BrowserWindow({
//     x: 500,
//     y: 300,
//     width: 700,
//     height: 500,
//     show: true,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   })
//
//   // const p = path.resolve('dist', 'server-devz.html')
//   // console.log(p)
//   // // win.loadURL(`file://${__dirname}server-dev.html`)
//   // // win.loadURL(path.resolve('dist', 'server-dev.html'))
//   // // win.loadURL('server-dev.html')
//   // win.loadURL(p)
//   win.loadFile('server-dev.html')
//
//   win.webContents.on('did-finish-load', () => {
//     win.webContents.send('set-socket', { name: socketName })
//   })
//
//   serverWin = win
// }

// function createBackgroundProcess(socketName) {
//   console.log('createBackgroundProcess')
//   const bundlePath = 'dist/electron-main.bundle.js';
//   console.log(bundlePath);
//   console.log(socketName);
//   const args = [
//     '--subprocess',
//     app.getVersion(),
//     socketName
//   ];
//   console.log(args)
//   serverProcess = fork(bundlePath, args);
//
//   serverProcess.on('message', msg => {
//     console.log('message: ', msg)
//   })
// }

electron__WEBPACK_IMPORTED_MODULE_1__["app"].on('ready', async () => {
  const serverSocket = "spacetrash"; //await findOpenSocket()

  createWindow(serverSocket)

  console.log("listening on ", serverSocket)
  // createBackgroundProcess(serverSocket)
  // if (isDev) {
  //   createBackgroundWindow(serverSocket)
  // } else {
  //   createBackgroundProcess(serverSocket)
  // }
})

electron__WEBPACK_IMPORTED_MODULE_1__["app"].on('before-quit', () => {
  if (serverProcess) {
    serverProcess.kill()
    serverProcess = null
  }
})


/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=electron-main.bundle.js.map
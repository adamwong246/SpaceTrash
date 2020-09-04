(self["webpackChunkspace_trash"] = self["webpackChunkspace_trash"] || []).push([["src_apps_client_boot_js"],(self["webpackChunkspace_trash"] = self["webpackChunkspace_trash"] || []).push([["src_apps_client_boot_js"],{

/***/ "./src/apps/client/App.jsx":
/*!*********************************!*\
  !*** ./src/apps/client/App.jsx ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _components_TabAuto_tsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TabAuto.tsx */ "./src/apps/client/components/TabAuto.tsx");
/* harmony import */ var _components_TabBots_tsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TabBots.tsx */ "./src/apps/client/components/TabBots.tsx");
/* harmony import */ var _components_TabDash_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/TabDash.jsx */ "./src/apps/client/components/TabDash.jsx");
/* harmony import */ var _components_TabManual_tsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/TabManual.tsx */ "./src/apps/client/components/TabManual.tsx");
/* harmony import */ var _components_TabRoot_tsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/TabRoot.tsx */ "./src/apps/client/components/TabRoot.tsx");
/* harmony import */ var _components_TabShip_tsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/TabShip.tsx */ "./src/apps/client/components/TabShip.tsx");
/* harmony import */ var _components_TabYard_tsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/TabYard.tsx */ "./src/apps/client/components/TabYard.tsx");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












__webpack_require__(/*! react-tabs/style/react-tabs.css */ "./node_modules/react-tabs/style/react-tabs.css");

__webpack_require__(/*! ../../style/crt.css */ "./src/style/crt.css");

__webpack_require__(/*! ../../style/tabs.css */ "./src/style/tabs.css");

__webpack_require__(/*! ../../style/typo.css */ "./src/style/typo.css");

__webpack_require__(/*! ../../style/layout.css */ "./src/style/layout.css");

__webpack_require__(/*! ../../style/style.css */ "./src/style/style.css");

__webpack_require__(/*! ./style/video.css */ "./src/apps/client/style/video.css");

__webpack_require__(/*! ./style/color.css */ "./src/apps/client/style/color.css");

__webpack_require__(/*! ./style/layout.css */ "./src/apps/client/style/layout.css");

var App = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        id: "main",
        className: "crt"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        id: "tabs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.Tabs, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.TabList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, null, "root"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, null, "ship"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, null, "bots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, null, "dash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, null, "auto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, null, "yard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, null, "help"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        id: "status"
      }, "uplink: active, simulator: on")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.TabPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_TabRoot_tsx__WEBPACK_IMPORTED_MODULE_12__.default, {
        broadcasterV2: this.props.broadcasterV2
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.TabPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_TabShip_tsx__WEBPACK_IMPORTED_MODULE_13__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.TabPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_TabBots_tsx__WEBPACK_IMPORTED_MODULE_9__.default, {
        broadcaster: this.props.broadcaster
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.TabPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_TabDash_jsx__WEBPACK_IMPORTED_MODULE_10__.default, {
        broadcasterV2: this.props.broadcasterV2
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.TabPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_TabAuto_tsx__WEBPACK_IMPORTED_MODULE_8__.default, {
        broadcasterV2: this.props.broadcasterV2
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.TabPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_TabYard_tsx__WEBPACK_IMPORTED_MODULE_14__.default, {
        broadcasterV2: this.props.broadcasterV2
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_7__.TabPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_TabManual_tsx__WEBPACK_IMPORTED_MODULE_11__.default, null)))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps)(App));

/***/ }),

/***/ "./src/apps/client/boot.js":
/*!*********************************!*\
  !*** ./src/apps/client/boot.js ***!
  \*********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store */ "./src/apps/client/redux/store.js");
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.jsx */ "./src/apps/client/App.jsx");
/* harmony import */ var _client_ipc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-ipc.js */ "./src/apps/client/client-ipc.js");
/* harmony import */ var _selectors_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectors.ts */ "./src/apps/client/selectors.ts");







var selectorIpc = (0,_selectors_ts__WEBPACK_IMPORTED_MODULE_6__.default)(_client_ipc_js__WEBPACK_IMPORTED_MODULE_5__.ipcSend);

var broadcaster = function broadcaster(commands) {
  (0,_client_ipc_js__WEBPACK_IMPORTED_MODULE_5__.ipcSend)('enqueue', commands).then(function (v) {
    console.log('then enqueue', v);
  })["catch"](function (e) {
    console.log('catch enqueue');
  })["finally"](function () {
    console.log('finally enqueue');
  });
};

var broadcasterV2 = function broadcasterV2(_ref) {
  var action = _ref.action,
      payload = _ref.payload;
  (0,_client_ipc_js__WEBPACK_IMPORTED_MODULE_5__.ipcSend)(action, payload).then(function (v) {
    console.log('then broadcasterV2', v);
  })["catch"](function (e) {
    console.log('catch broadcasterV2');
  })["finally"](function () {
    console.log('finally broadcasterV2');
  });
};

var wrapper = document.getElementById("app");
wrapper ? react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_3__.default
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
  broadcaster: broadcaster,
  broadcasterV2: broadcasterV2
})), wrapper) : false;
(0,_client_ipc_js__WEBPACK_IMPORTED_MODULE_5__.listen)("update", function (e) {
  _redux_store__WEBPACK_IMPORTED_MODULE_3__.default.dispatch({
    type: "RECEIVE_UPDATE",
    payload: e
  });
});
(0,_client_ipc_js__WEBPACK_IMPORTED_MODULE_5__.ipcSend)('load', {}).then(function (v) {
  console.log('then load', v);
})["catch"](function (e) {
  console.log('catch load');
})["finally"](function () {
  console.log('finally load');
});

/***/ }),

/***/ "./src/apps/client/client-ipc.js":
/*!***************************************!*\
  !*** ./src/apps/client/client-ipc.js ***!
  \***************************************/
/*! namespace exports */
/*! export ipcSend [provided] [no usage info] [missing usage info prevents renaming] */
/*! export listen [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ipcSend": () => /* binding */ ipcSend,
/* harmony export */   "listen": () => /* binding */ listen
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


console.log("client-ipc.js"); // Init

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var socketName;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.getServerSocket();

          case 2:
            socketName = _context.sent;
            connectSocket(socketName, function () {
              console.log('Connected!');
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

init(); // State

var replyHandlers = new Map();
var listeners = new Map();
var messageQueue = [];
var socketClient = null; // Functions

var connectSocket = function connectSocket(name, onOpen) {
  window.ipcConnect(name, function (client) {
    client.on('message', function (data) {
      var msg = JSON.parse(data);

      if (msg.type === 'error') {
        // Up to you whether or not to care about the error
        var id = msg.id;
        replyHandlers["delete"](id);
      } else if (msg.type === 'reply') {
        var _id = msg.id,
            result = msg.result;
        var handler = replyHandlers.get(_id);

        if (handler) {
          replyHandlers["delete"](_id);
          handler.resolve(result);
        }
      } else if (msg.type === 'push') {
        var _name = msg.name,
            args = msg.args;
        var listens = listeners.get(_name);

        if (listens) {
          listens.forEach(function (listener) {
            listener(args);
          });
        }
      } else {
        throw new Error('Unknown message type: ' + JSON.stringify(msg));
      }
    });
    client.on('connect', function () {
      socketClient = client; // Send any messages that were queued while closed

      if (messageQueue.length > 0) {
        messageQueue.forEach(function (msg) {
          return client.emit('message', msg);
        });
        messageQueue = [];
      }

      onOpen();
    });
    client.on('disconnect', function () {
      socketClient = null;
    });
  });
};

var ipcSend = function ipcSend(name, args) {
  return new Promise(function (resolve, reject) {
    var id = window.uuid.v4();
    replyHandlers.set(id, {
      resolve: resolve,
      reject: reject
    });

    if (socketClient) {
      socketClient.emit('message', JSON.stringify({
        id: id,
        name: name,
        args: args
      }));
    } else {
      messageQueue.push(JSON.stringify({
        id: id,
        name: name,
        args: args
      }));
    }
  });
};
var listen = function listen(name, cb) {
  if (!listeners.get(name)) {
    listeners.set(name, []);
  }

  listeners.get(name).push(cb);
  return function () {
    var arr = listeners.get(name);
    listeners.set(name, arr.filter(function (cb_) {
      return cb_ !== cb;
    }));
  };
};

function unlisten(name) {
  listeners.set(name, []);
}

/***/ }),

/***/ "./src/apps/client/components/TabDash.jsx":
/*!************************************************!*\
  !*** ./src/apps/client/components/TabDash.jsx ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _redux_selectors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/selectors.js */ "./src/apps/client/redux/selectors.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var TabDash = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(TabDash, _React$Component);

  var _super = _createSuper(TabDash);

  function TabDash() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TabDash);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TabDash, [{
    key: "render",
    value: function render() {
      var _this = this;

      var commandAutopilot = function commandAutopilot(payload) {
        _this.props.broadcasterV2({
          action: "COMMAND_AUTOPILOT",
          payload: payload
        });
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", null, !this.props.dashBoard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", null, "You haven't loaded a dashboard."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("button", {
        onClick: function onClick() {
          return _this.props.broadcasterV2({
            action: "PICK_DASHBOARD",
            payload: {}
          });
        }
      }, "Pick a dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("br", null), this.props.dashBoard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("p", null, "loaded: ", this.props.dashBoard.fileName));
    }
  }]);

  return TabDash;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return (0,_redux_selectors_js__WEBPACK_IMPORTED_MODULE_8__.getTabDashProps)(state);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps)(TabDash));

/***/ }),

/***/ "./src/apps/client/redux/selectors.js":
/*!********************************************!*\
  !*** ./src/apps/client/redux/selectors.js ***!
  \********************************************/
/*! namespace exports */
/*! export getTabAutoProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTabBotsProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTabDashProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTabRootProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTabShipProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTabViewProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTabYardProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTabDashProps": () => /* binding */ getTabDashProps,
/* harmony export */   "getTabBotsProps": () => /* binding */ getTabBotsProps,
/* harmony export */   "getTabRootProps": () => /* binding */ getTabRootProps,
/* harmony export */   "getTabAutoProps": () => /* binding */ getTabAutoProps,
/* harmony export */   "getTabYardProps": () => /* binding */ getTabYardProps,
/* harmony export */   "getTabShipProps": () => /* binding */ getTabShipProps,
/* harmony export */   "getTabViewProps": () => /* binding */ getTabViewProps
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var async_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! async-selector */ "./node_modules/async-selector/dist/index.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ "./src/apps/client/redux/store.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var baseSelector = function baseSelector(state) {
  return state;
};

var getDashboard = function getDashboard() {
  console.log("getDashboard");
  if (Window.MULTIVIEW) return new Promise(function (resolve, reject) {
    resolve(true);
  });
  return new Promise(function (resolve, reject) {
    console.log("swapping dashboards.js");
    var script = document.getElementById('multiView'); // var script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = './dashboard.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.replaceChild(script, document.getElementById('multiView')); // document.head.appendChild(script);
    // var script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.async = true;
    // script.src = './main.dashboard.js';
    // script.onload = resolve;
    // script.onerror = reject;
    // // document.head.replaceChild(script, document.getElementById('multiView'));
    // document.head.appendChild(script);

    resolve(true);
  });
};

var params = {
  sync: function sync() {
    return null;
  },
  async: getDashboard,
  onResolve: function onResolve() {
    return console.log('resolved');
  },
  onReject: function onReject(error) {
    return console.log('error', error);
  },
  onCancel: function onCancel(promise) {
    return console.log('canceled', promise);
  }
};
var selectDashboard = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)([baseSelector], function (base) {
  // console.log("selectDashboard")
  return base.dashBoard;
});
var selectMultivew = (0,async_selector__WEBPACK_IMPORTED_MODULE_2__.default)(params, [selectDashboard]);
var getTabDashProps = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)([baseSelector, selectMultivew], function (base, multiView) {
  return _objectSpread(_objectSpread({}, base), {}, {
    dashBoard: multiView
  });
});
var getTabBotsProps = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)([baseSelector], function (base) {
  return {
    drones: base.drones,
    dispatcher: function dispatcher(type, payload) {
      return _store_js__WEBPACK_IMPORTED_MODULE_3__.default.dispatch({
        type: type,
        payload: payload
      });
    }
  };
});
var getTabRootProps = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)([baseSelector], function (base) {
  return {
    terminalLines: base.terminalLines,
    autoPilot: base.autoPilot
  };
});
var getTabAutoProps = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)([baseSelector], function (base) {
  return {
    terminalLines: base.terminalLines,
    autoPilot: base.autoPilot
  };
});
var getTabYardProps = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)([baseSelector], function (base) {
  return _objectSpread(_objectSpread({}, base), {}, {
    yardedShip: base.yardedShip,
    launchShip: function launchShip(x) {
      var xhr = new XMLHttpRequest();
      var url = "http://localhost:3000/ships"; // open a connection

      xhr.open("POST", url, true); // Set the request header i.e. which type of content you are sending

      xhr.setRequestHeader("Content-Type", "application/json"); // Create a state change callback

      xhr.onreadystatechange = function (result) {// console.log(result)
        // if (xhr.readyState === 4 && xhr.status === 200) {
        //
        //   // Print received data from server
        //   result.innerHTML = this.responseText;
        //
        // }
      }; // Sending data with the request


      base.yardedShip.drones = base.yardedShip.bots;
      xhr.send(JSON.stringify(base.yardedShip));
    }
  });
});
var getTabShipProps = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)([baseSelector], function (base) {
  return {
    base: base
  };
});
var getTabViewProps = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)([baseSelector], function (base) {
  return {
    base: base
  };
});

/***/ }),

/***/ "./src/apps/client/redux/store.js":
/*!****************************************!*\
  !*** ./src/apps/client/redux/store.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers.ts */ "./src/apps/client/redux/reducers.ts");
/* harmony import */ var _initialState_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialState.ts */ "./src/apps/client/redux/initialState.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers_ts__WEBPACK_IMPORTED_MODULE_0__.default, _initialState_ts__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ }),

/***/ "./src/data/signals.js":
/*!*****************************!*\
  !*** ./src/data/signals.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "SOUND": "Noise will attract enemies, especially GOO. ROBOS produce the most sound. You can detect it with the SONAR_SCOPE.",
  "MOTION": "Movement will attract enemies, especially ROBOS. MUTANTS produce the most. You can detect it with the MOTION_SCOPE.",
  "HEAT": "Infrared light will attract enemies, especially MUTANTS. GOO produces the most. You can detect it with the INFRA_SCOPE."
});

/***/ }),

/***/ "./src/data/threats.js":
/*!*****************************!*\
  !*** ./src/data/threats.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 0,
  name: 'MUTO',
  description: 'Post-humans.',
  speed: 'fast',
  weakness: 'EXPLOSION',
  strength: 'EMP',
  attraction: 'MOTION',
  signal: ['SOUND', 'MOTION', 'HEAT']
}, {
  id: 1,
  name: 'ROBO',
  description: 'Ancient human machine.',
  speed: 'medium',
  weakness: 'EMP',
  strength: 'RADIATION',
  attraction: 'HEAT',
  signal: ['MOTION', 'HEAT', 'SOUND']
}, {
  id: 2,
  name: 'XENO',
  speed: 'slow',
  description: 'Alien lifeform.',
  weakness: 'RADIATION',
  strength: 'EXPLOSION',
  attraction: 'SOUND',
  signal: ['HEAT', 'SOUND', 'MOTION']
}, {
  id: 3,
  name: 'DRONE',
  speed: '?',
  description: '?',
  weakness: '?',
  strength: '?',
  attraction: '?',
  signal: ['?', '?', '?']
}]);

/***/ }),

/***/ "./src/data/upgrades.js":
/*!******************************!*\
  !*** ./src/data/upgrades.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 0,
  name: "GENERATOR",
  description: "charge a power port"
}, {
  id: 3,
  name: "INTERFACE",
  description: "connect to a ships terminal"
}, {
  id: 4,
  name: "PRY",
  description: "force open a closed door, which will can no longer can closed without WELD."
}, {
  id: 5,
  name: "WELD",
  description: "weld a closed door shut, which will no longer be able to be opened without PRY."
}, {
  id: 6,
  name: "TOW",
  description: "tow a disabled DRONE or a chest."
}, {
  id: 7,
  name: "SNEAK",
  description: "Makes DRONE invisible to SOUND but more visible to HEAT"
}, {
  id: 8,
  name: "CLOAK",
  description: "Make DRONE invisble to MOTION but more visible to SOUND"
}, {
  id: 9,
  name: "INSULATE",
  description: "Make DRONE invisble to HEAT but more visible to MOTION"
}, {
  id: 10,
  name: "EXPLOSION_ATTACK",
  description: "attack with EXPLOSION. Has a narrow angle of attack but long range. Causes the DRONE to emit SOUND."
}, {
  id: 11,
  name: "EMP_ATTACK",
  description: "attack with EMP. Has 360 angle of a attack but short range. Causes DRONE to emit HEAT"
}, {
  id: 12,
  name: "RADIATION_ATTACK",
  description: "attack with RADIATION. Has medium angle of attack and medium range. Causes DRONE to emit MOTION."
}, {
  id: 13,
  name: "FORCEFIELD",
  description: "Increase defense, at the cost of increased HEAT, MOTION and SOUND"
}, {
  id: 14,
  name: "SPEED",
  description: "Increase speed, at the cost of increased HEAT, MOTION and SOUND"
}, {
  id: 15,
  name: "EXPLOSION_SHIELD",
  description: "defend from EXPLOSION. Causes the DRONE to emit SOUND."
}, {
  id: 16,
  name: "EMP_SHIELD",
  description: "defend from EMP. Causes DRONE to emit HEAT"
}, {
  id: 17,
  name: "RADIATION_SHIELD",
  description: "defend from RADIATION. Causes DRONE to emit MOTION."
}, {
  id: 18,
  name: "INFRA_SCOPE",
  description: "Detects HEAT signatures through walls"
}, {
  id: 19,
  name: "SONAR_SCOPE",
  description: "Detects SOUND signatures from any direction"
}, {
  id: 20,
  name: "MOTION_SCOPE",
  description: "Detects MOTION signatures from a long distance."
}, {
  id: 21,
  name: "SYNC",
  description: "Allows 2 drones to share files. Can be used to download BLACKBOX files wirelessly"
}]);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/apps/client/style/color.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/apps/client/style/color.css ***!
  \***********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "a {\n  color: green;\n}\n\nbody{\n  color: green;\n}\n\n#command-line * {\n  background-color: green;\n  color: black;\n}\n\n\n#command-bar > span {\n  border-color: green;\n}\n\n.react-tabs__tab-list {\n  border-bottom: 1px solid green;\n}\n\n.monaco-editor * {\n  color: green !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/apps/client/style/layout.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/apps/client/style/layout.css ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".horizontal {\n  display: flex;\n  height: 100%;\n}\n\n#monaco-wrapper {\n  width: 100%;\n  height: 100%;\n}\n\nul {\n  padding: 0em 1em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/apps/client/style/video.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/apps/client/style/video.css ***!
  \***********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#screen{\n  position: relative;\n  width: 320px;\n  height: 200px;\n  border: 1px solid black;\n  overflow: hidden;\n}\n\n#ceiling {\n  position: absolute;\n  width: 320px;\n  height: 100px;\n  background-color: rgb(80,80,80);\n  z-index: -10000000;\n}\n\n#floor {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(128,128,128);\n  z-index: -10000000;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/crt.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/crt.css ***!
  \*********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".crt ::selection{\n  background-color: lightgreen;\n  color: black;\n}\n\n.crt::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));\n  z-index: 2;\n  background-size: 100% 2px, 3px 100%;\n  pointer-events: none;\n}\n\n@keyframes flicker {\n  0% {\n  opacity: 0.27861;\n  }\n  5% {\n  opacity: 0.34769;\n  }\n  10% {\n  opacity: 0.23604;\n  }\n  15% {\n  opacity: 0.90626;\n  }\n  20% {\n  opacity: 0.18128;\n  }\n  25% {\n  opacity: 0.83891;\n  }\n  30% {\n  opacity: 0.65583;\n  }\n  35% {\n  opacity: 0.67807;\n  }\n  40% {\n  opacity: 0.26559;\n  }\n  45% {\n  opacity: 0.84693;\n  }\n  50% {\n  opacity: 0.96019;\n  }\n  55% {\n  opacity: 0.08594;\n  }\n  60% {\n  opacity: 0.20313;\n  }\n  65% {\n  opacity: 0.71988;\n  }\n  70% {\n  opacity: 0.53455;\n  }\n  75% {\n  opacity: 0.37288;\n  }\n  80% {\n  opacity: 0.71428;\n  }\n  85% {\n  opacity: 0.70419;\n  }\n  90% {\n  opacity: 0.7003;\n  }\n  95% {\n  opacity: 0.36108;\n  }\n  100% {\n  opacity: 0.24387;\n  }\n}\n\n.crt::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(18, 16, 16, 0.1);\n  opacity: 0;\n  z-index: 2;\n  pointer-events: none;\n\n}\n\n@keyframes textShadow {\n  0% {\n    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  5% {\n    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  10% {\n    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  15% {\n    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  20% {\n    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  25% {\n    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  30% {\n    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  35% {\n    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  40% {\n    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  45% {\n    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  50% {\n    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  55% {\n    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  60% {\n    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  65% {\n    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  70% {\n    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  75% {\n    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  80% {\n    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  85% {\n    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  90% {\n    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  95% {\n    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n  100% {\n    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;\n  }\n}\n.crt {\n  cursor: crosshair;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/layout.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/layout.css ***!
  \************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "body{\n  margin: 0px;\n}\n\n#app, #main {\n  height: 100vh;\n}\n\n.codish {\n  font-family: monospace;\n}\n\n.react-tabs__tab-list.vertical {\n  display: flex;\n  flex-direction: column;\n  width: 170px;\n  margin: 0;\n  padding: 0;\n  color: white;\n  background: #3c3e43;\n}\n\np {\n  max-width: 40em;\n}\n\ntable {\n    border-collapse: collapse;\n}\nth, td {\n    padding: 0;\n}\n\n.react-tabs__tab-list {\n  border-bottom-width: 1px;\n  border-botom-style: solid;\n  margin: 0px;\n  padding: 0px;;\n}\n\n#status {\n  float: right;\n}\n\n#tabs {\n  height: 100%;\n}\n\n.react-tabs, .react-tabs__tab-panel--selected{\n  height: 100%;\n  overflow-y: scroll;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/style.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/style.css ***!
  \***********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "td{\n  vertical-align: top;\n}\n\ntable.matrix td {\n  width: 3em;\n  text-align: left;\n}\n\nbody{\n  font-family: \"Lucida Console\", Monaco, monospace;\n  background-color: black;\n}\n\n#command-line {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  margin: 0px;\n  outline: none;\n  border: none;\n}\n\n.scrolly {\n  overflow: scroll;\n  height: 100%;\n}\n\n\n\n.react-tabs__tab  {\n  text-decoration: underline;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/tabs.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/tabs.css ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".vertical {\n  display: flex;\n}\n\n.vertical > ul.react-tabs__tab-list li.react-tabs__tab{\n  display: block;\n}\n\n.react-tabs__tab.react-tabs__tab--selected{\n  background-color: green;\n  color: black;\n  border: none;\n  border-radius: 0px;\n  padding: 10px;\n}\n\n.react-tabs__tab-panel {\n  padding: 0.5rem;\n}\n\n.react-tabs__tab-panel.react-tabs__tab-panel--selected{\n  border: 1px solid green;\n  overflow: scroll;\n}\n\n.react-tabs__tab {\n  border: 1px dotted green;\n}\n\nhr {\n  border: 1px solid green;\n}\n\n\n#tabs .react-tabs__tab{\n  padding: 0em 1em;\n}\n\n.react-tabs__tab-list {\n  border-bottom: 1px solid red;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/typo.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/typo.css ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "#command-line * {\n  font-size: 16px;\n  font-family: \"Lucida Console\", Monaco, monospace;\n}\n\n#command-line form {\n  display: inline;\n}\n\n#command-bar > span {\n  border-width: 3px;\n  border-style: dashed;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/apps/client/style/color.css":
/*!*****************************************!*\
  !*** ./src/apps/client/style/color.css ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./color.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/apps/client/style/color.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/apps/client/style/layout.css":
/*!******************************************!*\
  !*** ./src/apps/client/style/layout.css ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./layout.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/apps/client/style/layout.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/apps/client/style/video.css":
/*!*****************************************!*\
  !*** ./src/apps/client/style/video.css ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./video.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/apps/client/style/video.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/style/crt.css":
/*!***************************!*\
  !*** ./src/style/crt.css ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./crt.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/crt.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/style/layout.css":
/*!******************************!*\
  !*** ./src/style/layout.css ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./layout.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/layout.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/style/tabs.css":
/*!****************************!*\
  !*** ./src/style/tabs.css ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./tabs.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/tabs.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/style/typo.css":
/*!****************************!*\
  !*** ./src/style/typo.css ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./typo.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/style/typo.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/apps/client/components/Bot.tsx":
/*!********************************************!*\
  !*** ./src/apps/client/components/Bot.tsx ***!
  \********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_tabs_1 = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
const Commands_tsx_1 = __webpack_require__(/*! ./Commands.tsx */ "./src/apps/client/components/Commands.tsx");
const Raycast_tsx_1 = __webpack_require__(/*! ./Raycast.tsx */ "./src/apps/client/components/Raycast.tsx");
const scopeSize = 200;
const halfScopeSize = scopeSize / 2;
const blankCharacter = '.';
class Scope extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        console.log(this.props);
        const rays = this.props.drone.rays;
        const longestRay = rays.reduce((mm, ray) => Math.max(mm, ray.rayDistance), 0);
        return (React.createElement("svg", { height: scopeSize, width: scopeSize },
            React.createElement("circle", { cx: halfScopeSize, cy: halfScopeSize, r: halfScopeSize, strokeWidth: "3", fill: "gray" }),
            React.createElement("line", { key: `ray-min`, stroke: 'white', x1: "0", y1: "0", x2: "0", y2: "1", vectorEffect: "non-scaling-stroke", transform: `translate(${halfScopeSize}, ${halfScopeSize}) scale(${halfScopeSize}) rotate(120, 0, 0)`, strokeWidth: "2" }),
            React.createElement("line", { key: `ray-max`, stroke: 'white', x1: "0", y1: "0", x2: "0", y2: "1", vectorEffect: "non-scaling-stroke", transform: `translate(${halfScopeSize}, ${halfScopeSize}) scale(${halfScopeSize}) rotate(240, 0, 0)`, strokeWidth: "2" }),
            rays.map((r, ndx) => {
                if (r) {
                    return (React.createElement("line", { key: `ray-${ndx}`, stroke: 'white', x1: "0", y1: "0", x2: "0", y2: "1", vectorEffect: "non-scaling-stroke", transform: `
            translate(${halfScopeSize}, ${halfScopeSize})
            scale(${halfScopeSize * (r.rayDistance / longestRay) - 1})
            rotate(${(ndx / 2.6) + 120}, 0, 0)` }));
                }
            })));
    }
}
;
class Visualization extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const rays = this.props.drone.rays;
        if (!rays) {
            return (React.createElement("span", null, "idk, no rays found "));
        }
        return (React.createElement("table", null,
            React.createElement("tr", null,
                React.createElement("td", null,
                    React.createElement(Raycast_tsx_1.default, { drone: this.props.drone }))),
            React.createElement("tr", null,
                React.createElement("td", null,
                    React.createElement(Scope, { drone: this.props.drone })))));
    }
}
;
class MainTable extends React.Component {
    constructor(a) {
        super(a);
        this.drone = this.props.drone;
    }
    render() {
        return (React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement(Commands_tsx_1.default, { drone: this.props.drone, broadcaster: this.props.broadcaster })),
                    React.createElement("td", null,
                        React.createElement(Visualization, { drone: this.props.drone, broadcaster: this.props.broadcaster }))),
                React.createElement("tr", null))));
    }
}
;
class Info extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const drone = this.props.drone;
        return (React.createElement("div", null,
            React.createElement("p", null,
                "x: ",
                drone.x),
            React.createElement("p", null,
                "y: ",
                drone.y),
            React.createElement("p", null,
                "direction: ",
                drone.direction)));
    }
}
;
class Upgrade extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const upgrade = this.props.upgrade;
        return (React.createElement("table", null,
            React.createElement("tr", null,
                React.createElement("td", null, "id: "),
                React.createElement("td", null, upgrade.id)),
            React.createElement("tr", null,
                React.createElement("td", null, "name: "),
                React.createElement("td", null, upgrade.name)),
            React.createElement("tr", null,
                React.createElement("td", null, "health: "),
                React.createElement("td", null, upgrade.health)),
            React.createElement("tr", null,
                React.createElement("td", null, "ammo: "),
                React.createElement("td", null, upgrade.ammo))));
    }
}
;
class Conf extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const drone = this.props.drone;
        const upgrades = [{
                id: "abc",
                name: "gun",
                health: "0.76",
                ammo: "10"
            },
            {
                id: "zxc",
                name: "radar",
                health: "1",
                ammo: "10"
            },
            {
                id: "asd",
                name: "power",
                health: "0.1",
                ammo: "100"
            }];
        return (React.createElement(react_tabs_1.Tabs, { className: "vertical" },
            React.createElement(react_tabs_1.TabList, null, upgrades.map((u) => React.createElement(react_tabs_1.Tab, null, u.id))),
            upgrades.map((u) => React.createElement(react_tabs_1.TabPanel, null,
                React.createElement(Upgrade, { upgrade: u })))));
    }
}
;
class Bot extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const drone = this.props.drone;
        console.log(this.props);
        if (!drone) {
            return (React.createElement("span", null, "idk, no drone found "));
        }
        return (React.createElement(react_tabs_1.Tabs, null,
            React.createElement(react_tabs_1.TabList, null,
                React.createElement(react_tabs_1.Tab, null, "info"),
                React.createElement(react_tabs_1.Tab, null, "feed"),
                React.createElement(react_tabs_1.Tab, null, "conf")),
            React.createElement(react_tabs_1.TabPanel, null,
                React.createElement(Info, { drone: drone, broadcaster: this.props.broadcaster })),
            React.createElement(react_tabs_1.TabPanel, null,
                React.createElement(MainTable, { drone: drone, broadcaster: this.props.broadcaster })),
            React.createElement(react_tabs_1.TabPanel, null,
                React.createElement(Conf, { drone: drone, broadcaster: this.props.broadcaster }))));
    }
}
exports.default = Bot;


/***/ }),

/***/ "./src/apps/client/components/BotV2.tsx":
/*!**********************************************!*\
  !*** ./src/apps/client/components/BotV2.tsx ***!
  \**********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_tabs_1 = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
const Commands_tsx_1 = __webpack_require__(/*! ./Commands.tsx */ "./src/apps/client/components/Commands.tsx");
const Raycast_tsx_1 = __webpack_require__(/*! ./Raycast.tsx */ "./src/apps/client/components/Raycast.tsx");
const scopeSize = 200;
const halfScopeSize = scopeSize / 2;
const blankCharacter = '.';
class Scope extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        console.log(this.props);
        const rays = this.props.drone.rays;
        const longestRay = rays.reduce((mm, ray) => Math.max(mm, ray.rayDistance), 0);
        return (React.createElement("svg", { height: scopeSize, width: scopeSize },
            React.createElement("circle", { cx: halfScopeSize, cy: halfScopeSize, r: halfScopeSize, strokeWidth: "3", fill: "gray" }),
            React.createElement("line", { key: `ray-min`, stroke: 'white', x1: "0", y1: "0", x2: "0", y2: "1", vectorEffect: "non-scaling-stroke", transform: `translate(${halfScopeSize}, ${halfScopeSize}) scale(${halfScopeSize}) rotate(120, 0, 0)`, strokeWidth: "2" }),
            React.createElement("line", { key: `ray-max`, stroke: 'white', x1: "0", y1: "0", x2: "0", y2: "1", vectorEffect: "non-scaling-stroke", transform: `translate(${halfScopeSize}, ${halfScopeSize}) scale(${halfScopeSize}) rotate(240, 0, 0)`, strokeWidth: "2" }),
            rays.map((r, ndx) => {
                if (r) {
                    return (React.createElement("line", { key: `ray-${ndx}`, stroke: 'white', x1: "0", y1: "0", x2: "0", y2: "1", vectorEffect: "non-scaling-stroke", transform: `
            translate(${halfScopeSize}, ${halfScopeSize})
            scale(${halfScopeSize * (r.rayDistance / longestRay) - 1})
            rotate(${(ndx / 2.6) + 120}, 0, 0)` }));
                }
            })));
    }
}
;
class Visualization extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const rays = this.props.drone.rays;
        if (!rays) {
            return (React.createElement("span", null, "idk, no rays found "));
        }
        return (React.createElement("table", null,
            React.createElement("tr", null,
                React.createElement("td", null,
                    React.createElement(Raycast_tsx_1.default, { drone: this.props.drone }))),
            React.createElement("tr", null,
                React.createElement("td", null,
                    React.createElement(Scope, { drone: this.props.drone })))));
    }
}
;
class MainTable extends React.Component {
    constructor(a) {
        super(a);
        this.drone = this.props.drone;
    }
    render() {
        return (React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement(Commands_tsx_1.default, { drone: this.props.drone, broadcaster: this.props.broadcaster })),
                    React.createElement("td", null,
                        React.createElement(Visualization, { drone: this.props.drone, broadcaster: this.props.broadcaster }))),
                React.createElement("tr", null))));
    }
}
;
class Info extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const drone = this.props.drone;
        return (React.createElement("div", null,
            React.createElement("p", null,
                "x: ",
                drone.x),
            React.createElement("p", null,
                "y: ",
                drone.y),
            React.createElement("p", null,
                "direction: ",
                drone.direction)));
    }
}
;
class Upgrade extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const upgrade = this.props.upgrade;
        return (React.createElement("table", null,
            React.createElement("tr", null,
                React.createElement("td", null, "id: "),
                React.createElement("td", null, upgrade.id)),
            React.createElement("tr", null,
                React.createElement("td", null, "name: "),
                React.createElement("td", null, upgrade.name)),
            React.createElement("tr", null,
                React.createElement("td", null, "health: "),
                React.createElement("td", null, upgrade.health)),
            React.createElement("tr", null,
                React.createElement("td", null, "ammo: "),
                React.createElement("td", null, upgrade.ammo))));
    }
}
;
class Conf extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const drone = this.props.drone;
        const upgrades = [{
                id: "abc",
                name: "gun",
                health: "0.76",
                ammo: "10"
            },
            {
                id: "zxc",
                name: "radar",
                health: "1",
                ammo: "10"
            },
            {
                id: "asd",
                name: "power",
                health: "0.1",
                ammo: "100"
            }];
        return (React.createElement(react_tabs_1.Tabs, { className: "vertical" },
            React.createElement(react_tabs_1.TabList, null, upgrades.map((u) => React.createElement(react_tabs_1.Tab, null, u.id))),
            upgrades.map((u) => React.createElement(react_tabs_1.TabPanel, null,
                React.createElement(Upgrade, { upgrade: u })))));
    }
}
;
class BotV2 extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const bot = this.props.bot;
        console.log(this.props);
        if (!bot) {
            return (React.createElement("span", null, "idk, no bot found "));
        }
        return (React.createElement(react_tabs_1.Tabs, { className: "vertical" },
            React.createElement(react_tabs_1.TabList, null,
                React.createElement(react_tabs_1.Tab, null, "GPS"),
                React.createElement(react_tabs_1.Tab, null, "chasis"),
                React.createElement(react_tabs_1.Tab, null, "battery"),
                React.createElement(react_tabs_1.Tab, null, "camera")),
            React.createElement(react_tabs_1.TabPanel, null,
                React.createElement("p", null,
                    "x: ",
                    bot.x),
                React.createElement("p", null,
                    "y: ",
                    bot.y),
                React.createElement("p", null,
                    "direction: ",
                    bot.direction)),
            React.createElement(react_tabs_1.TabPanel, null,
                React.createElement("p", null,
                    "id: ",
                    bot.chasis.id),
                React.createElement(Commands_tsx_1.default, { drone: bot, broadcaster: this.props.broadcaster })),
            React.createElement(react_tabs_1.TabPanel, null,
                React.createElement("p", null,
                    "id: ",
                    bot.battery.id)),
            React.createElement(react_tabs_1.TabPanel, null,
                React.createElement("p", null,
                    "id: ",
                    bot.camera.id),
                React.createElement(Visualization, { drone: bot, broadcaster: this.props.broadcaster }))));
    }
}
exports.default = BotV2;


/***/ }),

/***/ "./src/apps/client/components/Bots.tsx":
/*!*********************************************!*\
  !*** ./src/apps/client/components/Bots.tsx ***!
  \*********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_tabs_1 = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
const BotV2_tsx_1 = __webpack_require__(/*! ./BotV2.tsx */ "./src/apps/client/components/BotV2.tsx");
class Bots extends React.Component {
    render() {
        const bots = this.props.bots;
        if (!bots)
            return (React.createElement("span", null, "IDK no bots to be found"));
        return (React.createElement("div", { id: "main" }, bots.length > 0 ? (React.createElement(react_tabs_1.Tabs, { className: "vertical" },
            React.createElement(react_tabs_1.TabList, null, bots.map((bot) => {
                return (React.createElement(react_tabs_1.Tab, null, bot.name || bot.id));
            })),
            bots.map((bot) => {
                return (React.createElement(react_tabs_1.TabPanel, null,
                    React.createElement(BotV2_tsx_1.default, { bot: bot, broadcaster: this.props.broadcaster })));
            }))) : (React.createElement("span", null, " You have no bots "))));
    }
}
exports.default = Bots;


/***/ }),

/***/ "./src/apps/client/components/Commands.tsx":
/*!*************************************************!*\
  !*** ./src/apps/client/components/Commands.tsx ***!
  \*************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
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
                                this.props.broadcaster([{ action: "FORWARD", droneId: drone.id }]);
                            } }, " FORWARD")),
                    React.createElement("td", null)),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("button", { onClick: (e) => {
                                this.props.broadcaster([{ action: "LEFT", droneId: drone.id }]);
                            } }, " LEFT")),
                    React.createElement("td", null),
                    React.createElement("td", null,
                        React.createElement("button", { onClick: (e) => {
                                this.props.broadcaster([{ action: "RIGHT", droneId: drone.id }]);
                            } }, " RIGHT"))),
                React.createElement("tr", null,
                    React.createElement("td", null),
                    React.createElement("td", null,
                        React.createElement("button", { onClick: (e) => {
                                this.props.broadcaster([{ action: "BACK", droneId: drone.id }]);
                            } }, " BACK")),
                    React.createElement("td", null)))));
    }
}
;
exports.default = Commands;


/***/ }),

/***/ "./src/apps/client/components/MapDetail.tsx":
/*!**************************************************!*\
  !*** ./src/apps/client/components/MapDetail.tsx ***!
  \**************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class MapDetail extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        const x = this.props.x;
        const y = this.props.y;
        const cell = this.props.cell;
        return (React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "x"),
                    React.createElement("td", null, x)),
                React.createElement("tr", null,
                    React.createElement("td", null, "y"),
                    React.createElement("td", null, y)),
                React.createElement("tr", null,
                    React.createElement("td", null, "cell"),
                    React.createElement("td", null,
                        React.createElement("ul", null, Object.keys(cell).map((c) => {
                            return (React.createElement("li", null, `${c}: ${cell[c]}`));
                        })))))));
    }
}
;
exports.default = MapDetail;


/***/ }),

/***/ "./src/apps/client/components/Raycast.tsx":
/*!************************************************!*\
  !*** ./src/apps/client/components/Raycast.tsx ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
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

/***/ "./src/apps/client/components/Sessions.tsx":
/*!*************************************************!*\
  !*** ./src/apps/client/components/Sessions.tsx ***!
  \*************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class Sessions extends React.Component {
    constructor(a) {
        super(a);
        this.state = { content: (React.createElement("p", null, "loading...")) };
        this.updateWithSessions = this.updateWithSessions.bind(this);
        const updateWithSessions = this.updateWithSessions;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                updateWithSessions(this.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:3000/sessions", true);
        xhttp.send();
    }
    updateWithSessions(responseText) {
        console.log(responseText);
        const newContent = (React.createElement("ul", null, JSON.parse(responseText).map((session) => {
            console.log(session);
            return (React.createElement("li", null,
                React.createElement("p", null,
                    "id: ",
                    session._id),
                React.createElement("p", null,
                    "user: ",
                    session.user),
                React.createElement("p", null,
                    "ship: ",
                    session.ship),
                React.createElement("button", { onClick: (e) => {
                        this.props.broadcasterV2({ action: "OPEN_SESSION", payload: session._id });
                    } }, "Connect")));
        })));
        this.setState({
            "content": newContent
        });
    }
    render() {
        return (React.createElement("div", null, this.state.content));
    }
}
;
exports.default = Sessions;


/***/ }),

/***/ "./src/apps/client/components/ShipMap.tsx":
/*!************************************************!*\
  !*** ./src/apps/client/components/ShipMap.tsx ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const MapDetail_tsx_1 = __webpack_require__(/*! ./MapDetail.tsx */ "./src/apps/client/components/MapDetail.tsx");
const blankCharacter = '.';
class ShipMap extends React.Component {
    constructor(a) {
        super(a);
        this.state = { cursorX: 1, cursorY: 1 };
    }
    setCursor(x, y) {
        this.setState({ cursorX: x, cursorY: y });
    }
    render() {
        const shipMap = this.props.ship.shipMap;
        if (!shipMap) {
            return React.createElement("p", null, "idk");
        }
        if (Object.keys(shipMap).length === 0) {
            return (React.createElement("div", null, "You haven't boarded a ship."));
        }
        const metaData = {
            xMin: Number.POSITIVE_INFINITY,
            yMin: Number.POSITIVE_INFINITY,
            xMax: Number.NEGATIVE_INFINITY,
            yMax: Number.NEGATIVE_INFINITY,
        };
        Object.keys(shipMap).forEach((xKey) => {
            Object.keys(shipMap[xKey]).forEach((yKey) => {
                const xNumber = parseInt(xKey);
                const yNumber = parseInt(yKey);
                if (xNumber < metaData.xMin) {
                    metaData.xMin = xNumber;
                }
                if (xNumber > metaData.xMax) {
                    metaData.xMax = xNumber;
                }
                if (yNumber < metaData.yMin) {
                    metaData.yMin = yNumber;
                }
                if (yNumber > metaData.yMax) {
                    metaData.yMax = yNumber;
                }
            });
        });
        const height = metaData.yMax - metaData.yMin + 1;
        const width = metaData.xMax - metaData.xMin + 1;
        const matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter).map(() => new Array(2).fill(blankCharacter)));
        for (var yNdx = 0; yNdx < height; yNdx++) {
            for (var xNdx = 0; xNdx < width; xNdx++) {
                const x = (xNdx + metaData.xMin).toString();
                const y = (yNdx + metaData.yMin).toString();
                if (shipMap[x]) {
                    if (shipMap[x][y]) {
                        matrix[yNdx][xNdx] = shipMap[x][y];
                    }
                }
            }
        }
        return (React.createElement("div", null,
            React.createElement("span", null, this.props.ship.name),
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "Detail"),
                        React.createElement("td", null, "Map")),
                    React.createElement("tr", null,
                        React.createElement("td", null, matrix && matrix[this.state.cursorY] && matrix[this.state.cursorY][this.state.cursorX] && React.createElement(MapDetail_tsx_1.default, { cell: matrix[this.state.cursorY][this.state.cursorX], x: this.state.cursorX, y: this.state.cursorY })),
                        React.createElement("td", null, matrix && (React.createElement("table", { className: "matrix codish" },
                            React.createElement("tbody", null, matrix.map((row, y) => {
                                return (React.createElement("tr", null, row.map((cell, x) => {
                                    return (React.createElement("td", { onMouseOver: () => this.setCursor(x, y) }, cell));
                                })));
                            }))))))))));
    }
}
;
exports.default = ShipMap;


/***/ }),

/***/ "./src/apps/client/components/Ships.tsx":
/*!**********************************************!*\
  !*** ./src/apps/client/components/Ships.tsx ***!
  \**********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class Ships extends React.Component {
    constructor(a) {
        super(a);
        this.state = { content: (React.createElement("p", null, "loading...")) };
        this.updateWithShips = this.updateWithShips.bind(this);
        const updateWithShips = this.updateWithShips;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                updateWithShips(this.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:3000/ships", true);
        xhttp.send();
    }
    updateWithShips(responseText) {
        console.log(responseText);
        const newContent = (React.createElement("ul", null, JSON.parse(responseText).map((ship) => {
            return (React.createElement("li", null,
                ship.name,
                React.createElement("button", null, "Open in simulator")));
        })));
        this.setState({
            "content": newContent
        });
    }
    render() {
        return (React.createElement("div", null, this.state.content));
    }
}
;
exports.default = Ships;


/***/ }),

/***/ "./src/apps/client/components/TabAuto.tsx":
/*!************************************************!*\
  !*** ./src/apps/client/components/TabAuto.tsx ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const selectors_1 = __webpack_require__(/*! ../redux/selectors */ "./src/apps/client/redux/selectors.js");
class TabAuto extends React.Component {
    constructor(a) {
        super(a);
        this.messagesEndRef = react_1.createRef();
        this.scrollToBottom = () => {
            if (this.messagesEndRef.current) {
                this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidUpdate() {
        // this.scrollToBottom()
    }
    handleChange(event) {
        const { value } = event.target;
        this.setState(() => {
            return { value };
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: () => this.props.broadcasterV2({ action: "PICK_AUTOPILOT", payload: {} }) }, "Pick a autopilot"),
            this.props.autoPilot ?
                (React.createElement("span", null,
                    " You have set an autoPilot ",
                    this.props.autoPilot.fileName)) :
                (React.createElement("span", null, " You haven't set an autoPilot ")),
            React.createElement("div", { id: "terminal", className: "scrolly" },
                React.createElement("pre", null,
                    React.createElement("code", null, this.props.terminalLines.map((c, ndx) => {
                        return (React.createElement("div", { key: `terminal-line-${ndx}` },
                            (typeof c === "string") &&
                                (c.split('\n').map((l, ndx2) => React.createElement("span", { key: `terminal-line-p-${ndx2}` }, l))),
                            (typeof c !== "string") &&
                                React.createElement("span", { key: `terminal-line-p-${ndx}` }, c)));
                    }))),
                React.createElement("div", { ref: this.messagesEndRef }))));
    }
}
const mapStateToProps = state => {
    return selectors_1.getTabAutoProps(state);
};
exports.default = react_redux_1.connect(mapStateToProps)(TabAuto);


/***/ }),

/***/ "./src/apps/client/components/TabBots.tsx":
/*!************************************************!*\
  !*** ./src/apps/client/components/TabBots.tsx ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const react_tabs_1 = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
const selectors_js_1 = __webpack_require__(/*! ../redux/selectors.js */ "./src/apps/client/redux/selectors.js");
const Bot_tsx_1 = __webpack_require__(/*! ./Bot.tsx */ "./src/apps/client/components/Bot.tsx");
class TabBots extends React.Component {
    render() {
        const drones = this.props.drones;
        return (React.createElement("div", { id: "main" }, drones.length > 0 ? (React.createElement(react_tabs_1.Tabs, { className: "vertical" },
            React.createElement(react_tabs_1.TabList, null, drones.map((drone) => {
                return (React.createElement(react_tabs_1.Tab, null, drone.name || drone.id));
            })),
            drones.map((drone) => {
                return (React.createElement(react_tabs_1.TabPanel, null,
                    React.createElement(Bot_tsx_1.default, { drone: drone, broadcaster: this.props.broadcaster })));
            }))) : (React.createElement("span", null, " You have no bots "))));
    }
}
const mapStateToProps = state => {
    return selectors_js_1.getTabBotsProps(state);
};
exports.default = react_redux_1.connect(mapStateToProps)(TabBots);


/***/ }),

/***/ "./src/apps/client/components/TabManual.tsx":
/*!**************************************************!*\
  !*** ./src/apps/client/components/TabManual.tsx ***!
  \**************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_tabs_1 = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
const signals_js_1 = __webpack_require__(/*! ../../../data/signals.js */ "./src/data/signals.js");
const threats_js_1 = __webpack_require__(/*! ../../../data/threats.js */ "./src/data/threats.js");
const upgrades_js_1 = __webpack_require__(/*! ../../../data/upgrades.js */ "./src/data/upgrades.js");
const TabManual = () => (React.createElement("div", null,
    React.createElement(react_tabs_1.Tabs, { className: "vertical" },
        React.createElement(react_tabs_1.TabList, null,
            React.createElement(react_tabs_1.Tab, null, "README"),
            React.createElement(react_tabs_1.Tab, null, "game mechanics"),
            React.createElement(react_tabs_1.Tab, null, "apps")),
        React.createElement(react_tabs_1.TabPanel, null,
            React.createElement("h1", null, "README"),
            React.createElement("p", null, "spaceTrash is a real-time-strategy, massively-multiplayer-online \"rogue-ish\" game where you command a small fleet of drones aboard a small star ship. You are a QPU- A Quantum Processor Unit (Turing class II), installed in the bridge of a ship and are charged with using the drones aboard to explore, gather resources and survive.")),
        React.createElement(react_tabs_1.TabPanel, null,
            React.createElement(react_tabs_1.Tabs, { className: "vertical" },
                React.createElement(react_tabs_1.TabList, null,
                    React.createElement(react_tabs_1.Tab, null, "threats"),
                    React.createElement(react_tabs_1.Tab, null, "upgrades"),
                    React.createElement(react_tabs_1.Tab, null, "conditions"),
                    React.createElement(react_tabs_1.Tab, null, "signals"),
                    React.createElement(react_tabs_1.Tab, null, "items")),
                React.createElement(react_tabs_1.TabPanel, null,
                    React.createElement("table", null,
                        React.createElement("tbody", null, threats_js_1.default.map((t) => {
                            return (React.createElement("tr", { key: t.id },
                                React.createElement("td", null,
                                    t.name,
                                    React.createElement("hr", null),
                                    t.description),
                                React.createElement("td", null,
                                    "strength: ",
                                    t.strength,
                                    React.createElement("br", null),
                                    "weakness: ",
                                    t.weakness,
                                    React.createElement("br", null),
                                    "attraction: ",
                                    t.attraction,
                                    React.createElement("br", null),
                                    "speed: ",
                                    t.speed),
                                React.createElement("td", null,
                                    "1 ",
                                    t.signal[0],
                                    React.createElement("br", null),
                                    "2 ",
                                    t.signal[1],
                                    React.createElement("br", null),
                                    "3 ",
                                    t.signal[2],
                                    React.createElement("br", null))));
                        })))),
                React.createElement(react_tabs_1.TabPanel, null,
                    React.createElement("p", null, "Upgrades are small items used to extend DRONEs. A DRONE can use as many UPGRADES as it has UPGRADE SLOTS. They will degrade after each use, becoming less reliable and more likely to fail over time."),
                    React.createElement("table", null,
                        React.createElement("tbody", null, upgrades_js_1.default.map((t) => {
                            return (React.createElement("tr", { key: t.id },
                                React.createElement("td", null, t.name),
                                React.createElement("td", null, t.description)));
                        })))),
                React.createElement(react_tabs_1.TabPanel, null,
                    React.createElement("p", null, "There are 4 effects which can damage your drones, enemies and items."),
                    React.createElement("table", null,
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "VACUUM"),
                                React.createElement("td", null, "If an airlock is opened or the hull breached, the ships atmosphere will quickly blown into space, along with anything not secured in place,  where it will be lost. The effect grows from the breach point, spreading tile by tile (and room by room, if the doors are not sealed)")),
                            React.createElement("tr", null,
                                React.createElement("td", null, "SLIME"),
                                React.createElement("td", null, "Interstellar mold. It grows slowly, tile by tile. It can be cleared with a weapon but it will likely grow back.")),
                            React.createElement("tr", null,
                                React.createElement("td", null, "EXPLOSION"),
                                React.createElement("td", null, "Concusive shock wave. A single wave of force will emanate, causing damage to anything within line-of-sight. It will knock back anything not secured.")),
                            React.createElement("tr", null,
                                React.createElement("td", null, "RADIATION"),
                                React.createElement("td", null, "If an engine core is damaged, it will begin slowly emiting radiation, which wil increase in a circular pattern and which will cause more damage to a drone the closer it is. It is not blocked by walls.")),
                            React.createElement("tr", null,
                                React.createElement("td", null, "EMP"),
                                React.createElement("td", null, "If a power port is damaged, it will emit lightening-like busrts of electromagnetic interference. Drones will take damage and then require time to reboot if they are struck."))))),
                React.createElement(react_tabs_1.TabPanel, null,
                    React.createElement("p", null, "You, your enemies and some items give off SIGNALS which can be detected with the right scopes. "),
                    React.createElement("table", null,
                        React.createElement("tbody", null, Object.keys(signals_js_1.default).map((s) => {
                            return (React.createElement("tr", null,
                                React.createElement("td", null, s),
                                React.createElement("td", null, signals_js_1.default[s])));
                        })))),
                React.createElement(react_tabs_1.TabPanel, null,
                    React.createElement(react_tabs_1.Tabs, null,
                        React.createElement(react_tabs_1.TabList, null,
                            React.createElement(react_tabs_1.Tab, null, "small"),
                            React.createElement(react_tabs_1.Tab, null, "medium"),
                            React.createElement(react_tabs_1.Tab, null, "large")),
                        React.createElement(react_tabs_1.TabPanel, null,
                            React.createElement("p", null, "Can be PICKed up and held by a DRONE and PUT in a CHEST."),
                            React.createElement("table", null,
                                React.createElement("tbody", null,
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "SCRAP"),
                                        React.createElement("td", null, "Used to make repairs. Can be found in CHESTs and laying on the ground.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "FUEL"),
                                        React.createElement("td", null, "Used to travel. Can be found in the CORE, in CHESTs and laying on the ground.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "UPGRADE"),
                                        React.createElement("td", null, "Installed into DRONEs. Can be found in other DRONEs, in CHESTs and laying on the ground.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "BLACKBOX"),
                                        React.createElement("td", null, "A ship's files. Can be found in the BRIDGE."))))),
                        React.createElement(react_tabs_1.TabPanel, null,
                            React.createElement("p", null, "Can be TOWed."),
                            React.createElement("table", null,
                                React.createElement("tbody", null,
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "CHEST"),
                                        React.createElement("td", null, "Stores SCRAP, FUEL, and UPGRADES.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "DRONE"),
                                        React.createElement("td", null, "Can be TOWed if disabled."))))),
                        React.createElement(react_tabs_1.TabPanel, null,
                            React.createElement("p", null, "Cannot be moved. They are permanently part of a ship."),
                            React.createElement("table", null,
                                React.createElement("tbody", null,
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "PORT"),
                                        React.createElement("td", null, "Can be used by the Generator to provide power. If damaged, it will cause an EMP.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "CORE"),
                                        React.createElement("td", null, "Can be used to gather or store FUEL. If damaged, it will leak RADIATION.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "DOOR"),
                                        React.createElement("td", null, "Can be opened or closed. If an exterior airlock is damaged or opened, it will cause an EXPLOSION. It must be POWERED.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "TERMINAL"),
                                        React.createElement("td", null, "Used in conjunction with INTERFACE to access a ship's systems. It must be POWERED.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "DATABASE"),
                                        React.createElement("td", null, "Secures a BLACKBOX for travel. Any BLACKBOX not docked during travel is destroyed.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "DRONE_DOCK"),
                                        React.createElement("td", null, "Secures a DRONE for travel. Any DRONE not docked during travel is destroyed.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "CHEST_MOUNT"),
                                        React.createElement("td", null, "Secures a CHEST for travel. Any CHEST not docked during travel is destroyed.")),
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "FABRICATOR"),
                                        React.createElement("td", null, "Can create UPGRADEs with SCRAP."))))))))),
        React.createElement(react_tabs_1.TabPanel, null,
            React.createElement(react_tabs_1.Tabs, { className: "vertical" },
                React.createElement(react_tabs_1.TabList, null,
                    React.createElement(react_tabs_1.Tab, null, "README"),
                    React.createElement(react_tabs_1.Tab, null, "shipFactory"),
                    React.createElement(react_tabs_1.Tab, null, "dashBoard"),
                    React.createElement(react_tabs_1.Tab, null, "autoPilot")),
                React.createElement(react_tabs_1.TabPanel, null, "Apps are pieces of player-written code, written in game, compiled with webpack and run in the same game."),
                React.createElement(react_tabs_1.TabPanel, null, "ShipFactories will create a Ship. Think if this as a level editor."),
                React.createElement(react_tabs_1.TabPanel, null, "Dashboards will present the player with a customized user interfaace."),
                React.createElement(react_tabs_1.TabPanel, null, "Autopilots are libraries of code which can be invoked by the player at game time. They can be `commanded` to execute a custom function or `setToAutopilot` which will allow the autopliot automatically submit instructions."))))));
exports.default = TabManual;


/***/ }),

/***/ "./src/apps/client/components/TabRoot.tsx":
/*!************************************************!*\
  !*** ./src/apps/client/components/TabRoot.tsx ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_tabs_1 = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const selectors_js_1 = __webpack_require__(/*! ../redux/selectors.js */ "./src/apps/client/redux/selectors.js");
const Ships_tsx_1 = __webpack_require__(/*! ./Ships.tsx */ "./src/apps/client/components/Ships.tsx");
const Sessions_tsx_1 = __webpack_require__(/*! ./Sessions.tsx */ "./src/apps/client/components/Sessions.tsx");
class TabRoot extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(react_tabs_1.Tabs, { className: "" },
                React.createElement(react_tabs_1.TabList, null,
                    React.createElement(react_tabs_1.Tab, null, "home"),
                    React.createElement(react_tabs_1.Tab, null, "play")),
                React.createElement(react_tabs_1.TabPanel, null,
                    React.createElement("pre", null, `

  ███████╗██████╗  █████╗  ██████╗███████╗████████╗██████╗  █████╗ ███████╗██╗  ██╗
  ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║  ██║
  ███████╗██████╔╝███████║██║     █████╗     ██║   ██████╔╝███████║███████╗███████║
  ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝     ██║   ██╔══██╗██╔══██║╚════██║██╔══██║
  ███████║██║     ██║  ██║╚██████╗███████╗   ██║   ██║  ██║██║  ██║███████║██║  ██║
  ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝


// A rogue-ish RTS MMO about robots fighting on spaceships
// adamwong246, 2020

1 Login into your spacetash terminal to take command of a ship and bots.
2 Dock with other ships.
3 Explore, gather resouces and fight other bots.
4 Write code to manage your bots
5 GOTO 2`)),
                React.createElement(react_tabs_1.TabPanel, null,
                    React.createElement(react_tabs_1.Tabs, { className: "vertical" },
                        React.createElement(react_tabs_1.TabList, null,
                            React.createElement(react_tabs_1.Tab, null, "localhost:5000")),
                        React.createElement(react_tabs_1.TabPanel, null,
                            React.createElement(react_tabs_1.Tabs, null,
                                React.createElement(react_tabs_1.TabList, null,
                                    React.createElement(react_tabs_1.Tab, null, "Sessions"),
                                    React.createElement(react_tabs_1.Tab, null, "Ships")),
                                React.createElement(react_tabs_1.TabPanel, null,
                                    React.createElement(Sessions_tsx_1.default, { broadcasterV2: this.props.broadcasterV2 })),
                                React.createElement(react_tabs_1.TabPanel, null,
                                    React.createElement(Ships_tsx_1.default, null)))))))));
    }
}
;
const mapStateToProps = state => {
    return selectors_js_1.getTabRootProps(state);
};
exports.default = react_redux_1.connect(mapStateToProps)(TabRoot);


/***/ }),

/***/ "./src/apps/client/components/TabShip.tsx":
/*!************************************************!*\
  !*** ./src/apps/client/components/TabShip.tsx ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const MapDetail_tsx_1 = __webpack_require__(/*! ./MapDetail.tsx */ "./src/apps/client/components/MapDetail.tsx");
const selectors_js_1 = __webpack_require__(/*! ../redux/selectors.js */ "./src/apps/client/redux/selectors.js");
const blankCharacter = '.';
class TabShip extends React.Component {
    constructor(a) {
        super(a);
        this.state = { cursorX: 1, cursorY: 1 };
    }
    setCursor(x, y) {
        this.setState({ cursorX: x, cursorY: y });
    }
    render() {
        const shipMap = this.props.base.shipMap;
        if (!shipMap) {
            return React.createElement("p", null, "idk");
        }
        if (Object.keys(shipMap).length === 0) {
            return (React.createElement("div", null, "You haven't boarded a ship."));
        }
        const metaData = {
            xMin: Number.POSITIVE_INFINITY,
            yMin: Number.POSITIVE_INFINITY,
            xMax: Number.NEGATIVE_INFINITY,
            yMax: Number.NEGATIVE_INFINITY,
        };
        Object.keys(shipMap).forEach((xKey) => {
            Object.keys(shipMap[xKey]).forEach((yKey) => {
                const xNumber = parseInt(xKey);
                const yNumber = parseInt(yKey);
                if (xNumber < metaData.xMin) {
                    metaData.xMin = xNumber;
                }
                if (xNumber > metaData.xMax) {
                    metaData.xMax = xNumber;
                }
                if (yNumber < metaData.yMin) {
                    metaData.yMin = yNumber;
                }
                if (yNumber > metaData.yMax) {
                    metaData.yMax = yNumber;
                }
            });
        });
        const height = metaData.yMax - metaData.yMin + 1;
        const width = metaData.xMax - metaData.xMin + 1;
        const matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter).map(() => new Array(2).fill(blankCharacter)));
        for (var yNdx = 0; yNdx < height; yNdx++) {
            for (var xNdx = 0; xNdx < width; xNdx++) {
                const x = (xNdx + metaData.xMin).toString();
                const y = (yNdx + metaData.yMin).toString();
                if (shipMap[x]) {
                    if (shipMap[x][y]) {
                        matrix[yNdx][xNdx] = shipMap[x][y];
                    }
                }
            }
        }
        return (React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "Detail"),
                    React.createElement("td", null, "Map")),
                React.createElement("tr", null,
                    React.createElement("td", null, matrix && matrix[this.state.cursorY] && matrix[this.state.cursorY][this.state.cursorX] && React.createElement(MapDetail_tsx_1.default, { cell: matrix[this.state.cursorY][this.state.cursorX], x: this.state.cursorX, y: this.state.cursorY })),
                    React.createElement("td", null, matrix && (React.createElement("table", { className: "matrix codish" },
                        React.createElement("tbody", null, matrix.map((row, y) => {
                            return (React.createElement("tr", null, row.map((cell, x) => {
                                return (React.createElement("td", { onMouseOver: () => this.setCursor(x, y) }, cell));
                            })));
                        })))))))));
    }
}
;
const mapStateToProps = state => {
    return selectors_js_1.getTabShipProps(state);
};
exports.default = react_redux_1.connect(mapStateToProps)(TabShip);


/***/ }),

/***/ "./src/apps/client/components/TabYard.tsx":
/*!************************************************!*\
  !*** ./src/apps/client/components/TabYard.tsx ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const react_tabs_1 = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
const ShipMap_tsx_1 = __webpack_require__(/*! ./ShipMap.tsx */ "./src/apps/client/components/ShipMap.tsx");
const Bots_tsx_1 = __webpack_require__(/*! ./Bots.tsx */ "./src/apps/client/components/Bots.tsx");
const selectors_js_1 = __webpack_require__(/*! ../redux/selectors.js */ "./src/apps/client/redux/selectors.js");
class TabYard extends React.Component {
    constructor(a) {
        super(a);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: () => this.props.broadcasterV2({ action: "PICK_SHIPYARD", payload: {} }) }, "Pick a ship plan"),
            this.props.shipYard ?
                (React.createElement("span", null,
                    " You have set an shipYard: ",
                    this.props.shipYard.fileName,
                    " ")) :
                (React.createElement("span", null, " You haven't set an shipYard ")),
            this.props.yardedShip &&
                React.createElement(react_tabs_1.Tabs, null,
                    React.createElement(react_tabs_1.TabList, null,
                        React.createElement(react_tabs_1.Tab, null, "demo"),
                        React.createElement(react_tabs_1.Tab, null, "make")),
                    React.createElement(react_tabs_1.TabPanel, null,
                        React.createElement(react_tabs_1.Tabs, null,
                            React.createElement(react_tabs_1.TabList, null,
                                React.createElement(react_tabs_1.Tab, null, "ship"),
                                React.createElement(react_tabs_1.Tab, null, "bots")),
                            React.createElement(react_tabs_1.TabPanel, null,
                                React.createElement(ShipMap_tsx_1.default, { ship: this.props.yardedShip })),
                            React.createElement(react_tabs_1.TabPanel, null,
                                React.createElement(Bots_tsx_1.default, { bots: this.props.yardedShip.bots })))),
                    React.createElement(react_tabs_1.TabPanel, null,
                        React.createElement("p", null, "If you are happy with this ship, you can launch it on the session server"),
                        React.createElement("button", { onClick: this.props.launchShip }, " Launch "))),
            React.createElement("pre", null, JSON.stringify(this.props, null, 2))));
    }
}
;
const mapStateToProps = state => {
    return selectors_js_1.getTabYardProps(state);
};
exports.default = react_redux_1.connect(mapStateToProps)(TabYard);


/***/ }),

/***/ "./src/apps/client/redux/initialState.ts":
/*!***********************************************!*\
  !*** ./src/apps/client/redux/initialState.ts ***!
  \***********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = {
    shipMap: {},
    drones: false,
    terminalLines: [
        "booting spaceTrash session terminal",
    ],
    userView: false,
    autoPilot: false,
    shipYard: false,
    dashBoard: false,
    yardedShip: false,
    openSession: false
};


/***/ }),

/***/ "./src/apps/client/redux/reducers.ts":
/*!*******************************************!*\
  !*** ./src/apps/client/redux/reducers.ts ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
;
const initialState_ts_1 = __webpack_require__(/*! ./initialState.ts */ "./src/apps/client/redux/initialState.ts");
exports.default = (state = initialState_ts_1.default, action) => {
    switch (action.type) {
        case "LOAD_FILE": {
            return {
                ...state,
                userBot: action.payload
            };
        }
        case "RECEIVE_UPDATE": {
            console.log(action);
            return {
                ...state,
                ...action.payload
            };
        }
        case "UPLOAD_FOLDER": {
            return {
                ...state, userFiles: action.payload
            };
        }
        case "SET_OPEN_FILE": {
            return {
                ...state,
                openFile: action.payload
            };
        }
        case "SET_USER_VIEW": {
            const evaled = eval(action.payload);
            return {
                ...state,
                userView: evaled
            };
        }
        default:
            console.log("IDK".action);
            return state;
    }
    return state;
};


/***/ }),

/***/ "./src/apps/client/selectors.ts":
/*!**************************************!*\
  !*** ./src/apps/client/selectors.ts ***!
  \**************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const reselect_1 = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
const baseSelector = (state => state);
exports.default = (ipc, websocket) => {
    console.log("mark0");
    return {
        selectIpc: reselect_1.createSelector([baseSelector], state => {
            ipcDispatcher(state);
            return true;
        })
    };
};


/***/ }),

/***/ "./src/raycastConsts.ts":
/*!******************************!*\
  !*** ./src/raycastConsts.ts ***!
  \******************************/
/*! flagged exports */
/*! export ABSOLLUTE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MMath [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export screenHeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! export screenWidth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stripWidth [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./src/images/walls_3.png":
/*!********************************!*\
  !*** ./src/images/walls_3.png ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAMAAADlCI9NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRFXFxcmZmZNjY2IyMjR0dHjIyMZ2dncXFxp6enFhYWUFBQfn5+3NzcwsLCgYGBsbGxK/SiwwAAC0lJREFUeNrEWduW4zYM0122FNv//7cFQMpxMtNtz+lDtd3pTHZiQryAIBPy/3zC+5TX18mpbod9exxbDbnc5/2u9D7x6+w59LPqnGcPaU+/nG8AyyD+VgA4rrrZI7aQcur2/ezthvIEQEtuEH8DAJwzdHt6T3nPw74f4/22UP1kAjiu18UvB/7WltP22ur6QwDV4V3beltd8HcCOGed/HLibyh77rGH9YcAgrnmnP19bz6QzxOADafyS9y2GegB3p0v1u4AjuP4iFON9IgD6DiBX1rvI9EDvDtfDMMBnOdZhWJdYNOZnQCOaD9FougAUPhNpQPwCAG45A5/EX9i1xmDAM5mPzWiIIDEbwIdMJIBmHKHv4g/LVyR9gCg0AOVPxBeZNKlMmWIABAuAaBRuqXi17ZYt9lozwDATfyhtRYaky6nIUMEgIQXABnlq/i13vD/65pXjY3W5E/ebtK+Xip22wcA2J9bnIaL380xQyu0FiuezdsN2tdLyW5rALJ5oI3ehuHCdwFej7GXknNBrUW5lXdkCHIJZd75mnOawAizccYqINus8HprcDCsodaaubXRZNpZd+Ou+D3nESP+fbTBqwNIh4eYCIBLANtL11V6IAITFsvDPGngeNVaLYUsNKoC2FfAo67bVHUBpvHa27zgnPz9xhh5aDxHCw2U+tK9PL/oAQB4kBb8IV5gTHhvnYHDd8NYiLqX55fSPpnpfef7CWDqH0UFN6UVXp/P7y/anwgsKqv2lpgEpfRpldlTKJdZDva2m4hkIo1I+4OBRRqMQgAMwrDKHPhpmuUnE973SyQCORgumM48pW+b1TsejkoFrBbWE5Zr7X6ZZSAHMwGceRLibBFDniAGgFXut1pePgFsSrFqecAngAtBO+Z2cOkD+C9tJYGpmWLB8kAhyP2M1dzOlHie3c6jmeB+IoI6BYLMw8Q8nHbpkKe1H0jI6yQCup8OkAd6PJ120xeAuxuWN4B+0L7V4ha6V4YnpSLCJz2aooLxBjBO2rda7Gl4ZXhSJk+Jr6YY7uYJMGCCyCSYVptBAKqVmzzQkRChhPnouW2djAefZ2MSDK9NVF6PwctN3RAJwbRs7xMsxa4LCBGDQ0nAO/e6POAuIAAGJJf5bEfeoOcgADQfJkHQVzERHuMuIAAGZIejHhcI9DlbjwD06MzPYIYVAmtnBMCEyCUS8Dric3YjAhjNmR/W3QOVjYJUQQBMiD01pNl9gjW1SgAgmhj73arEDnLFyreGghCAa1MLA2d7ww8GIC1ikn0kepYrVt4X9CIBgKJR12LNLg8EAVgUc2eWrK8fGuNBANYvQFpA7h5IAlDu2rAiy7LuFQcA3Txg/QJgYW15wAD8LO7wKLRqAJgpPzxgAB4F7gyV8s1UaIYCwEx5ewCsN9X7EGLW5E38dlAUm6gZzbkduPokgIcHEPARFvOndJu/NSfbpQDmcgLuIICnB5jBcAE6uks+Cr6WSkOzfaiv2NiMD8SKVWBx4zsjw8+EuSUfBV8BZYCEl/oCFTcoxIEc7INVYHHjO+EBiS4DAAOROieClKaBOfxQoEGOQPRk56vo1SnRZQBgoFHnNJJSFZjTjxRinC0IAPnKOnKAIFHVkzkTk4v6ZENFxhc5wYiRvaQQAAkRwWHmSVIhBE01M9SQmVzslqh1ZBo5wYixBemjwITxlsSELQqB0VFJBkCktzUYifphmiCDXQOwRfTEnNJHM3c+JgCRXi8CIHFmggx2DQB6/J72Ryth3pVVaInNcLvqNABUJxuVAT1gAOjy/KgLqzvP/JwpSDpavgGgOmF90A3BAATNR/lZJO92jIu8LLkAIAEAv1dnlEBzDwjAsw+uJ/FS0ZILAFAysak8nZmXBwTg2ZLBPa2bDCz5tUltTmghsY3Z31imBgAZQllyz4bJQmkyMO2xS21SC4ltzD6Vp4cAGfLRDMkNrV5WaCiw12Z6hAAqxhS5w9WBqrQqCTdqlGbR997I7jn22E2PEEDAmCJ3uDpQlQYlIVrivFVAaJdKH7kOD6AAGHL0wTKlRGB9quINAEIEAMDhoFWvGEUnpyF4AN5kyKm+Rj0tAqN7lTAEjSEADm/oiHVAg9lsIIIHSLBshvB3OJjz7oPNJ0MlYTGJoAwBAHQWG4jgARKsBDGnBOa8+6A7AEtCkwjKEAMQXYcDQJUawlCUg08J5gNpA0/CYhJBv4gMILuYDgeAIDVUHlOC+YAAqNgMgMxbwyUAm0UnokuTxCAAlTGQPiUzOADlwOseWQXAZ1GGgOobGAQgsPlLn5IZ9Eo1Iqr3yFo8BFUhAIBjct7ipMgp4eAUVtV32hpcKAkP4yugCPIAH6ZhNJ6D8xYnRU+CQYmGP5oRQlU1pLOvmSgZAHMn7obBS01WAMJ1byfwAhXp3CYLr2w+lVGoJooM47+0nzGoyQpAmvd2wjoFZgSlQur3VJZYhncShny9po3CQRGjBzSHqGQhia3soXLKe0P0TsK0zzhsFE4clNh1x82zbNZGnvt4EsHtAeYA2G/aNkRzCm/+FggA4AT0IViWB5gDYL9h25Bdo7lmzpt2b6sfikUALPdDnkrIqiTMpXyOPxwKfllNSecp93E1JaRSbl1433/OMp+jmYWABACSfSmy1QGYmedubn6fxQNNRJSiIhscQPphd3wfT0Kb/azA6rQcQDv5MKWVzOUCZekUA2DKYqjC1f1sLCwfpkw/uEBZOmUsJowqAqtwyiMBmMfnef04kX27TttKaUljw3+RIh/n56lfe0xTOWJClZUAVPXDppY/fzHpKm2TE64peTRtGhGAoH4oAPv4YZJWdfsuJ8whHjguu7bWVNtd9gJgrt7033FhHHEh+F6ipHJOu7Z54C57ATBXd/13ztnbEoL3EoUDqTRh18NeKx0IACr88jVtNYrGVzrIZxmlDQZSacKhBlRXOhAAVPj0NW0wiuaapAXvUd06RCgXH6XqTuWyJmcAygFdao2Kxck+KS08uUS5PZAmH6UtFdLGm5wAoB+e1gkkzdgnpYUHx5GHBzggBgcQoxZQFgIQo/oeTWp5t9kCywYCuCIKgE2eBqA1ySALQZ5RozFNannXbYFlA8HgYEKZJLoRAFT89JndAGwvD4lM2rVdKNpLAuALOK0lx720IIAePSQyadd2ofgOWwj3PJbKF1VhEDGOIAnwxtONa4kQHYDNY1lj4IfcREefxhEkAd3YjWt90ByAs5wD+CDftYnu1v/nCoYlSvUQvAGnr8FUNnis/48VDEuUsEIwtQQEKbDbfQ7GCxHeP+v8eZpyQEvAUH6uzu4XmCdh/Dwal4p/KnOwrFp4tpmwmk5+fETzcbSbs4XLybIq6WuR9ksfep6dVaAt0OEY7GjpI9b4WoT9XB8Uab8g0js9YraKHaX8vlP8XB8YAHSZ+/Opm3MNTy2h/N16kq3SxCeyrZ+fRH8anpD+gJ+iQWuoTQvi6RLMvlzmlalQlF89yBatTWDXgni4BLMv8xT1j/x3m1WLjHvA9i1M72mzmEPRnMjfwdT2mIYfH95pEef7Fqb3sFnModicyFmoj9/TgEkoD0QjfAjPOuP6qGzb7HOTl62sL9i/3m0xTnnglAeaEf7oIrnlC9PjbFKMCz/8mO+2yM85CKC2PxytB8vaC7Yw1w6BgF8Ro3L/cMr3sY1x9LotXOlbiAg4tp3Ss6U/H7SlC1kaG8ni/tTMlXxIv6zWvrKeTQqkUVjk96dmruRTKOmfP98tqDZbpXCFYFscNkfbVuz/dDL37KYtuUKwLQ6bI+e08BuF/VwWLpJM30wU0r+4QL43l9+UtNsDf/kc+OcnzOu7r3V/+vOnGN+k+DkVoI+G9B/Pf/34/i8BBgBUEJ+48RLfhAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/images/walls_4.png":
/*!********************************!*\
  !*** ./src/images/walls_4.png ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAMAAADlCI9NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFQTFRFNykUUTYbbEUnSTAYkFw0YT4jFhYWKCAMXEAgJB0LPS4WfVBAbwAABCpJREFUeNrU2dtiozoMBVBd2pnd/v8Hn+KrZCRDQufh0JcEmHjFMda2h74fHl8PD5KHhz486OPh8fnwIK7HN//9Znf0M/PKck99S/X4oj9f5I5+Zl5Z7mlvmUtP8sdf/sDxuT+vjz8uZ45X/QrKq+NSuaNeEKLak59/6LN87s/r44/KmePVuFJf/Vwqd2i7oQLQmssAPzdANoDeXAY43msGwNEBVwCBZAC6AxgtBgB2ACQAeQjQDCBHm+De0UXzAoBr506AvgYgKt+6NydHB8AAcAvQB9jRE9oaaEPuHoAHAHIXgBigdwEUA0o7BsAvAvQNQB36GQAZgDugjrz/MQClxRTQ58gUQG3kJYDRbAqozx0SwJx++mwZAMrnXQMoB0DMIEQIGHNFAyAFUAgwZwJAnwlxAoyOH3NFBJjfbgW4MpUAsADYA1rHj0e1AcYUaYtRBKAYMKsU1593/NJvAegRoDwHKYAzAEwxegdAthrOp34FgONAEgPoBKA7ALAB4OgSUw05DiTjApmpuFkCwCmQOMDsXl4BsGXqDYArU3cAKH0NU4w4nIoxhB7QjzPAz4TmhloNxQy12sQVoD84SrMWzNb/OYB/G4CXAcLnPPAKYDyfcGOgYBwAFwB6CuD64KcAyQDotaA2mQH0dYAEALwA0ABAGwDMiDoDkAJk/gR+vrsJGNWQ/bSzAJJAYgG6AySBJAEIt6VRFEjEFiNGBNAcQAuADKBMKqP0lLc4BxKfiCygfJ4F2LVSkogcYBajWgqFI4BPRCPHusdQtdfGq0TkAXZlVPs6AHAMwC8DpCYCuQCA7erYroza2uw2QFeArAC8BtAVQL8DgAfIQ4CeAHZhAgfgBIBwEPZQeA1YVseY810ZYVgyYQlKIcBVw7kyCSLZFjDnuxSACYDMf+LywE0AOUCdfBYAr6FUYELpGwC1odQD2jcesRytgU0oZZkZRl011J5Kt6GUTIdQn3l7Ku6T4S4RsRkSFAA0AGgG4PrlenPlF7kF4Lk/YMZ636l7GzAK8h4gGYDuAdQBZAfANUCfAXACwPRwmAnrAmrkgTPArpUuAWz2B3oH2NXiAOAuQGMAbQAwiah38GmTygDMit7uD+gZEEYyt6DmtiSOAWIA7ACY64INQO8ATOnBCIVY8oAH8ADgVwCwkawt0U8AWMB4cuEmXjMLnAC2Frh1QVuTW8BcqshMxRwC5BTJyE7OcSg1AB9IMCdi2YVSnmtDv0HhQmEeyVJA3TWNAfOeMVAigI5toj0gjmR1UqrlIAdIDhj1eAdQD4DboOiBADkA4zcwAL0PoC0AvQMkTcUNAESAEQg0zYT9N6D5n1Z2i6bVgQ2AxQXpdYtmGWM3APB7RK39voGPdacUbRRmgNa+phuVKwD1sMWI/Rm/U4o6bfB+m24tx+E95e1/AgwAszpNG5iTlKQAAAAASUVORK5CYII=");

/***/ })

}])]);
//# sourceMappingURL=src_apps_client_boot_js.client.bundle.js.map
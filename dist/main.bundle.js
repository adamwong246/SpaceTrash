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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.js");
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

const app = electron.app || electron.remote.app;

const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

module.exports = isEnvSet ? getFromEnv : !app.isPackaged;


/***/ }),

/***/ "./node_modules/event-pubsub/es5.js":
/*!******************************************!*\
  !*** ./node_modules/event-pubsub/es5.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function EventPubSub() {
    this._events_={};
    this.publish=this.trigger=this.emit=emit;
    this.subscribe=this.on=on;
    this.once=once;
    this.unSubscribe=this.off=off;
    this.emit$=emit$;

    function on(type,handler,once){
        if(!handler){
            throw new ReferenceError('handler not defined.');
        }

        if(!this._events_[type]){
            this._events_[type]=[];
        }

        if(once){
            handler._once_ = once;
        }
        this._events_[type].push(handler);
        return this;
    }

    function once(type,handler){
        return this.on(type, handler, true);
    }

    function off(type,handler){
        if(!this._events_[type]){
            return this;
        }

        if(!handler){
            throw new ReferenceError('handler not defined. if you wish to remove all handlers from the event please pass "*" as the handler');
        }

        if(handler=='*'){
            delete this._events_[type];
            return this;
        }

        var handlers=this._events_[type];

        while(handlers.includes(handler)){
            handlers.splice(
                handlers.indexOf(handler),
                1
            );
        }

        if(handlers.length<1){
            delete this._events_[type];
        }

        return this;
    }

    function emit(type){
        this.emit$.apply(this, arguments);
        if(!this._events_[type]){
            return this;
        }
        arguments.splice=Array.prototype.splice;
        arguments.splice(0,1);

        var handlers=this._events_[type];
        var onceHandled=[];

        for(var i in handlers){
            var handler=handlers[i];
            handler.apply(this, arguments);
            if(handler._once_){
              onceHandled.push(handler);
            }
        }

        for(var i in onceHandled){
            this.off(
              type,
              onceHandled[i]
            );
        }

        return this;
    }

    function emit$(type, args){
        if(!this._events_['*']){
            return this;
        }

        var catchAll=this._events_['*'];

        args.shift=Array.prototype.shift;
        args.shift(type);

        for(var handler of catchAll){
            handler.apply(this, args);
        }

        return this;
    }

    return this;
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

module.exports=EventPubSub;


/***/ }),

/***/ "./node_modules/event-pubsub/es6.js":
/*!******************************************!*\
  !*** ./node_modules/event-pubsub/es6.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class EventPubSub {
    constructor( scope ) {
        this._events_ = {};
        this.publish = this.trigger = this.emit;
        this.subscribe = this.on;
        this.unSubscribe = this.off;
    }

    on( type, handler, once ) {
        if ( !handler ) {
            throw new ReferenceError( 'handler not defined.' );
        }

        if ( !this._events_[ type ] ) {
            this._events_[ type ] = [];
        }

         if(once){
            handler._once_ = once;
        }

        this._events_[ type ].push( handler );
        return this;
    }

    once( type, handler ) {
        return this.on( type, handler, true );
    }

    off( type, handler ) {
        if ( !this._events_[ type ] ) {
            return this;
        }

        if ( !handler ) {
            throw new ReferenceError( 'handler not defined. if you wish to remove all handlers from the event please pass "*" as the handler' );
        }

        if ( handler == '*' ) {
            delete this._events_[ type ];
            return this;
        }

        const handlers = this._events_[ type ];

        while ( handlers.includes( handler ) ) {
            handlers.splice(
                handlers.indexOf( handler ),
                1
            );
        }

        if ( handlers.length < 1 ) {
            delete this._events_[ type ];
        }

        return this;
    }

    emit( type, ...args ) {
        if ( !this._events_[ type ] ) {
            return this.emit$( type, ...args );
        }

        const handlers = this._events_[ type ];
        const onceHandled=[];

        for ( let handler of handlers ) {
            handler.apply( this, args );
            if(handler._once_){
              onceHandled.push(handler);
            }
        }

        for(let handler of onceHandled){
          this.off(type,handler);
        }

        return this.emit$( type, ...args );
    }

    emit$( type, ...args ) {
        if ( !this._events_[ '*' ] ) {
            return this;
        }

        const catchAll = this._events_[ '*' ];

        for ( let handler of catchAll ) {
            handler.call( this, type, ...args );
        }

        return this;
    }
}

module.exports = EventPubSub;


/***/ }),

/***/ "./node_modules/event-pubsub/event-pubsub.js":
/*!***************************************************!*\
  !*** ./node_modules/event-pubsub/event-pubsub.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let EventPubSub = __webpack_require__(/*! ./es5 */ "./node_modules/event-pubsub/es5.js");
if(process.version[1]>5){
    EventPubSub = __webpack_require__(/*! ./es6 */ "./node_modules/event-pubsub/es6.js");
}

module.exports=EventPubSub;


/***/ }),

/***/ "./node_modules/js-message/Message.js":
/*!********************************************!*\
  !*** ./node_modules/js-message/Message.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Message() {
    Object.defineProperties(
        this, {
            data: {
                enumerable: true,
                get: getData,
                set: setData
            },
            type: {
                enumerable: true,
                get: getType,
                set: setType
            },
            load:{
                enumarable:true,
                writable:false,
                value:parse
            },
            JSON: {
                enumerable: true,
                get: getJSON
            }
        }
    );

    var type = '';
    var data = {};

    function getType() {
        return type;
    }

    function getData() {
        return data;
    }

    function getJSON() {
        return JSON.stringify(
            {
                type: type,
                data: data
            }
        );
    }

    function setType(value) {
        type = value;
    }

    function setData(value) {
        data = value;
    }

    function parse(message){
        try{
            var message=JSON.parse(message);
            type=message.type;
            data=message.data;
        }catch(err){
            var badMessage=message;
            type='error',
            data={
                message:'Invalid JSON response format',
                err:err,
                response:badMessage
            }
        }
    }
}

module.exports=Message;


/***/ }),

/***/ "./node_modules/js-queue/queue.js":
/*!****************************************!*\
  !*** ./node_modules/js-queue/queue.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Queue(asStack){
    Object.defineProperties(
        this,
        {
            add:{
                enumerable:true,
                writable:false,
                value:addToQueue
            },
            next:{
                enumerable:true,
                writable:false,
                value:run
            },
            clear:{
                enumerable:true,
                writable:false,
                value:clearQueue
            },
            contents:{
                enumerable:false,
                get:getQueue,
                set:setQueue
            },
            autoRun:{
                enumerable:true,
                writable:true,
                value:true
            },
            stop:{
                enumerable:true,
                writable:true,
                value:false
            }
        }
    );

    var queue=[];
    var running=false;
    var stop=false;

    function clearQueue(){
        queue=[];
        return queue;
    }

    function getQueue(){
        return queue;
    }

    function setQueue(val){
        queue=val;
        return queue;
    }

    function addToQueue(){
        for(var i in arguments){
            queue.push(arguments[i]);
        }
        if(!running && !this.stop && this.autoRun){
            this.next();
        }
    }

    function run(){
        running=true;
        if(queue.length<1 || this.stop){
            running=false;
            return;
        }

        queue.shift().bind(this)();
    }
}

module.exports=Queue;


/***/ }),

/***/ "./node_modules/node-ipc/dao/client.js":
/*!*********************************************!*\
  !*** ./node_modules/node-ipc/dao/client.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const net = __webpack_require__(/*! net */ "net"),
    tls = __webpack_require__(/*! tls */ "tls"),
    EventParser = __webpack_require__(/*! ../entities/EventParser.js */ "./node_modules/node-ipc/entities/EventParser.js"),
    Message = __webpack_require__(/*! js-message */ "./node_modules/js-message/Message.js"),
    fs = __webpack_require__(/*! fs */ "fs"),
    Queue = __webpack_require__(/*! js-queue */ "./node_modules/js-queue/queue.js");

let Events = __webpack_require__(/*! event-pubsub/es5 */ "./node_modules/event-pubsub/es5.js");
if(process.version[1]>4){
    Events = __webpack_require__(/*! event-pubsub */ "./node_modules/event-pubsub/event-pubsub.js");
}

let eventParser = new EventParser();

class Client extends Events{
    constructor(config,log){
        super();
        Object.assign(
            this,
            {
                Client  : Client,
                config  : config,
                queue   : new Queue,
                socket  : false,
                connect : connect,
                emit    : emit,
                log     : log,
                retriesRemaining:config.maxRetries||0,
                explicitlyDisconnected: false
            }
        );

        eventParser=new EventParser(this.config);
    }
}

function emit(type,data){
    this.log('dispatching event to ', this.id, this.path, ' : ', type, ',', data);

    let message=new Message;
    message.type=type;
    message.data=data;

    if(this.config.rawBuffer){
        message=new Buffer(type,this.config.encoding);
    }else{
        message=eventParser.format(message);
    }

    if(!this.config.sync){
        this.socket.write(message);
        return;
    }

    this.queue.add(
        syncEmit.bind(this,message)
    );
}

function syncEmit(message){
    this.log('dispatching event to ', this.id, this.path, ' : ', message);
    this.socket.write(message);
}

function connect(){
    //init client object for scope persistance especially inside of socket events.
    let client=this;

    client.log('requested connection to ', client.id, client.path);
    if(!this.path){
        client.log('\n\n######\nerror: ', client.id ,' client has not specified socket path it wishes to connect to.');
        return;
    }

    const options={};

    if(!client.port){
        client.log('Connecting client on Unix Socket :', client.path);

        options.path=client.path;

        if (process.platform ==='win32' && !client.path.startsWith('\\\\.\\pipe\\')){
            options.path = options.path.replace(/^\//, '');
            options.path = options.path.replace(/\//g, '-');
            options.path= `\\\\.\\pipe\\${options.path}`;
        }

        client.socket = net.connect(options);
    }else{
        options.host=client.path;
        options.port=client.port;

        if(client.config.interface.localAddress){
          options.localAddress=client.config.interface.localAddress;
        }

        if(client.config.interface.localPort){
          options.localPort=client.config.interface.localPort;
        }

        if(client.config.interface.family){
          options.family=client.config.interface.family;
        }

        if(client.config.interface.hints){
          options.hints=client.config.interface.hints;
        }

        if(client.config.interface.lookup){
          options.lookup=client.config.interface.lookup;
        }

        if(!client.config.tls){
            client.log('Connecting client via TCP to', options);
            client.socket = net.connect(options);
        }else{
            client.log('Connecting client via TLS to', client.path ,client.port,client.config.tls);
            if(client.config.tls.private){
                client.config.tls.key=fs.readFileSync(client.config.tls.private);
            }
            if(client.config.tls.public){
                client.config.tls.cert=fs.readFileSync(client.config.tls.public);
            }
            if(client.config.tls.trustedConnections){
                if(typeof client.config.tls.trustedConnections === 'string'){
                    client.config.tls.trustedConnections=[client.config.tls.trustedConnections];
                }
                client.config.tls.ca=[];
                for(let i=0; i<client.config.tls.trustedConnections.length; i++){
                    client.config.tls.ca.push(
                        fs.readFileSync(client.config.tls.trustedConnections[i])
                    );
                }
            }

            Object.assign(client.config.tls,options);

            client.socket = tls.connect(
                client.config.tls
            );
        }
    }

    client.socket.setEncoding(this.config.encoding);

    client.socket.on(
        'error',
        function(err){
            client.log('\n\n######\nerror: ', err);
            client.publish('error', err);

        }
    );

    client.socket.on(
        'connect',
        function connectionMade(){
            client.publish('connect');
            client.retriesRemaining=client.config.maxRetries;
            client.log('retrying reset');
        }
    );

    client.socket.on(
        'close',
        function connectionClosed(){
            client.log('connection closed' ,client.id , client.path,
            client.retriesRemaining, 'tries remaining of', client.config.maxRetries
        );

            if(
                client.config.stopRetrying ||
                client.retriesRemaining<1 ||
                client.explicitlyDisconnected

            ){
                client.publish('disconnect');
                client.log(
                    (client.config.id),
                    'exceeded connection rety amount of',
                    ' or stopRetrying flag set.'
                );

                client.socket.destroy();
                client.publish('destroy');
                client=undefined;

                return;
            }

            setTimeout(
                function retryTimeout(){
                    client.retriesRemaining--;
                    client.connect();
                }.bind(null,client),
                client.config.retry
            );

            client.publish('disconnect');
        }
    );

    client.socket.on(
        'data',
        function(data) {
            client.log('## received events ##');
            if(client.config.rawBuffer){
                client.publish(
                   'data',
                   new Buffer(data,client.config.encoding)
                );
                if(!client.config.sync){
                    return;
                }

                client.queue.next();
                return;
            }

            if(!this.ipcBuffer){
                this.ipcBuffer='';
            }

            data=(this.ipcBuffer+=data);

            if(data.slice(-1)!=eventParser.delimiter || data.indexOf(eventParser.delimiter) == -1){
                client.log('Messages are large, You may want to consider smaller messages.');
                return;
            }

            this.ipcBuffer='';

            const events = eventParser.parse(data);
            const eCount = events.length;
            for(let i=0; i<eCount; i++){
                let message=new Message;
                message.load(events[i]);

                client.log('detected event', message.type, message.data);
                client.publish(
                   message.type,
                   message.data
                );
            }

            if(!client.config.sync){
                return;
            }

            client.queue.next();
        }
    );
}

module.exports=Client;


/***/ }),

/***/ "./node_modules/node-ipc/dao/socketServer.js":
/*!***************************************************!*\
  !*** ./node_modules/node-ipc/dao/socketServer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

const net = __webpack_require__(/*! net */ "net"),
    tls = __webpack_require__(/*! tls */ "tls"),
    fs = __webpack_require__(/*! fs */ "fs"),
    dgram = __webpack_require__(/*! dgram */ "dgram"),
    EventParser = __webpack_require__(/*! ../entities/EventParser.js */ "./node_modules/node-ipc/entities/EventParser.js"),
    Message = __webpack_require__(/*! js-message */ "./node_modules/js-message/Message.js");

let Events = __webpack_require__(/*! event-pubsub/es5 */ "./node_modules/event-pubsub/es5.js");
if(process.version[1]>4){
    Events = __webpack_require__(/*! event-pubsub */ "./node_modules/event-pubsub/event-pubsub.js");
}

let eventParser = new EventParser();

class Server extends Events{
    constructor(path,config,log,port){
        super();
        Object.assign(
            this,
            {
                config          : config,
                path            : path,
                port            : port,
                udp4            : false,
                udp6            : false,
                log             : log,
                server          : false,
                sockets         : [],
                emit            : emit,
                broadcast       : broadcast
            }
        );

        eventParser=new EventParser(this.config);

        this.on(
            'close',
            serverClosed.bind(this)
        );
    }

    onStart(socket){
        this.trigger(
            'start',
            socket
        );
    }

    stop(){
        this.server.close();
    }

    start(){
        if(!this.path){
            this.log('Socket Server Path not specified, refusing to start');
            return;
        }

        if(this.config.unlink){
            fs.unlink(
                this.path,
                startServer.bind(this)
            );
        }else{
            startServer.bind(this)();
        }
    }
}

function emit(socket, type, data){
    this.log('dispatching event to socket', ' : ', type, data);

    let message=new Message;
    message.type=type;
    message.data=data;

    if(this.config.rawBuffer){
        this.log(this.config.encoding)
        message=new Buffer(type,this.config.encoding);
    }else{
        message=eventParser.format(message);
    }

    if(this.udp4 || this.udp6){

        if(!socket.address || !socket.port){
            this.log('Attempting to emit to a single UDP socket without supplying socket address or port. Redispatching event as broadcast to all connected sockets');
            this.broadcast(type,data);
            return;
        }

        this.server.write(
            message,
            socket
        );
        return;
    }

    socket.write(message);
}

function broadcast(type,data){
    this.log('broadcasting event to all known sockets listening to ', this.path,' : ', ((this.port)?this.port:''), type, data);
    let message=new Message;
    message.type=type;
    message.data=data;

    if(this.config.rawBuffer){
        message=new Buffer(type,this.config.encoding);
    }else{
        message=eventParser.format(message);
    }

    if(this.udp4 || this.udp6){
        for(let i=1, count=this.sockets.length; i<count; i++){
            this.server.write(message,this.sockets[i]);
        }
    }else{
        for(let i=0, count=this.sockets.length; i<count; i++){
            this.sockets[i].write(message);
        }
    }
}

function serverClosed(){
    for(let i=0, count=this.sockets.length; i<count; i++){
        let socket=this.sockets[i];
        let destroyedSocketId=false;

        if(socket){
            if(socket.readable){
                continue;
            }
        }

        if(socket.id){
            destroyedSocketId=socket.id;
        }

        this.log('socket disconnected',destroyedSocketId.toString());

        if(socket && socket.destroy){
            socket.destroy();
        }

        this.sockets.splice(i,1);

        this.publish('socket.disconnected', socket, destroyedSocketId);

        return;
    }
}

function gotData(socket,data,UDPSocket){
    let sock=((this.udp4 || this.udp6)? UDPSocket : socket);
    if(this.config.rawBuffer){
        data=new Buffer(data,this.config.encoding);
        this.publish(
            'data',
            data,
            sock
        );
        return;
    }

    if(!this.ipcBuffer){
        this.ipcBuffer='';
    }

    data=(this.ipcBuffer+=data);

    if(data.slice(-1)!=eventParser.delimiter || data.indexOf(eventParser.delimiter) == -1){
        this.log('Messages are large, You may want to consider smaller messages.');
        return;
    }

    this.ipcBuffer='';

    data=eventParser.parse(data);

    while(data.length>0){
        let message=new Message;
        message.load(data.shift());

        // Only set the sock id if it is specified.
        if (message.data && message.data.id){
            sock.id=message.data.id;
        }

        this.log('received event of : ',message.type,message.data);

        this.publish(
            message.type,
            message.data,
            sock
        );
    }
}

function socketClosed(socket){
    this.publish(
        'close',
        socket
    );
}

function serverCreated(socket) {
    this.sockets.push(socket);

    if(socket.setEncoding){
        socket.setEncoding(this.config.encoding);
    }

    this.log('## socket connection to server detected ##');
    socket.on(
        'close',
        socketClosed.bind(this)
    );

    socket.on(
        'error',
        function(err){
            this.log('server socket error',err);

            this.publish('error',err);
        }.bind(this)
    );

    socket.on(
        'data',
        gotData.bind(this,socket)
    );

    socket.on(
        'message',
        function(msg,rinfo) {
            if (!rinfo){
                return;
            }

            this.log('Received UDP message from ', rinfo.address, rinfo.port);
            let data;

            if(this.config.rawSocket){
                data=new Buffer(msg,this.config.encoding);
            }else{
                data=msg.toString();
            }
            socket.emit('data',data,rinfo);
        }.bind(this)
    );

    this.publish(
        'connect',
        socket
    );

    if(this.config.rawBuffer){
        return;
    }
}

function startServer() {
    this.log(
        'starting server on ',this.path,
        ((this.port)?`:${this.port}`:'')
    );

    if(!this.udp4 && !this.udp6){
        this.log('starting TLS server',this.config.tls);
        if(!this.config.tls){
            this.server=net.createServer(
                serverCreated.bind(this)
            );
        }else{
            startTLSServer.bind(this)();
        }
    }else{
        this.server=dgram.createSocket(
            ((this.udp4)? 'udp4':'udp6')
        );
        this.server.write=UDPWrite.bind(this);
        this.server.on(
            'listening',
            function UDPServerStarted() {
                serverCreated.bind(this)(this.server);
            }.bind(this)
        );
    }

    this.server.on(
        'error',
        function(err){
            this.log('server error',err);

            this.publish(
                'error',
                err
            );
        }.bind(this)
    );

    this.server.maxConnections=this.config.maxConnections;

    if(!this.port){
        this.log('starting server as', 'Unix || Windows Socket');
        if (process.platform ==='win32'){
            this.path = this.path.replace(/^\//, '');
            this.path = this.path.replace(/\//g, '-');
            this.path= `\\\\.\\pipe\\${this.path}`;
        }

        this.server.listen(
            this.path,
            this.onStart.bind(this)
        );

        return;
    }

    if(!this.udp4 && !this.udp6){
        this.log('starting server as', (this.config.tls?'TLS':'TCP'));
        this.server.listen(
            this.port,
            this.path,
            this.onStart.bind(this)
        );
        return;
    }

    this.log('starting server as',((this.udp4)? 'udp4':'udp6'));

    this.server.bind(
        this.port,
        this.path
    );

    this.onStart(
        {
            address : this.path,
            port    : this.port
        }
    );
}

function startTLSServer(){
    this.log('starting TLS server',this.config.tls);
    if(this.config.tls.private){
        this.config.tls.key=fs.readFileSync(this.config.tls.private);
    }else{
        this.config.tls.key=fs.readFileSync(`${__dirname}/../local-node-ipc-certs/private/server.key`);
    }
    if(this.config.tls.public){
        this.config.tls.cert=fs.readFileSync(this.config.tls.public);
    }else{
        this.config.tls.cert=fs.readFileSync(`${__dirname}/../local-node-ipc-certs/server.pub`);
    }
    if(this.config.tls.dhparam){
        this.config.tls.dhparam=fs.readFileSync(this.config.tls.dhparam);
    }
    if(this.config.tls.trustedConnections){
        if(typeof this.config.tls.trustedConnections === 'string'){
            this.config.tls.trustedConnections=[this.config.tls.trustedConnections];
        }
        this.config.tls.ca=[];
        for(let i=0; i<this.config.tls.trustedConnections.length; i++){
            this.config.tls.ca.push(
                fs.readFileSync(this.config.tls.trustedConnections[i])
            );
        }
    }
    this.server=tls.createServer(
        this.config.tls,
        serverCreated.bind(this)
    );
}

function UDPWrite(message,socket){
    let data=new Buffer(message, this.config.encoding);
    this.server.send(
        data,
        0,
        data.length,
        socket.port,
        socket.address,
        function(err, bytes) {
            if(err){
                this.log('error writing data to socket',err);
                this.publish(
                    'error',
                    function(err){
                        this.publish('error',err);
                    }
                );
            }
        }
    );
}

module.exports=Server;

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/node-ipc/entities/Defaults.js":
/*!****************************************************!*\
  !*** ./node_modules/node-ipc/entities/Defaults.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*eslint no-magic-numbers: ["error", { "ignore": [ 0] }]*/

/**
 * @module entities
 */

const os = __webpack_require__(/*! os */ "os");

/**
 * @class Defaults
 * @description Defaults Entity
 */
class Defaults{

    /**
     * @constructor
     * @method constructor
     * @return {void}
     */
    constructor(){

        this.appspace='app.';
        this.socketRoot='/tmp/';
        this.id=os.hostname();

        this.encoding='utf8';
        this.rawBuffer=false;
        this.sync=false;
        this.unlink=true;

        this.delimiter='\f';

        this.silent=false;
        this.logDepth=5;
        this.logInColor=true;
        this.logger=console.log.bind(console);

        this.maxConnections=100;
        this.retry=500;
        this.maxRetries=Infinity;
        this.stopRetrying=false;

        this.IPType=getIPType();
        this.tls=false;
        this.networkHost = (this.IPType == 'IPv6') ? '::1' : '127.0.0.1';
        this.networkPort = 8000;

        this.interface={
            localAddress:false,
            localPort:false,
            family:false,
            hints:false,
            lookup:false
        }
    }
}

/**
 * method to get ip type
 *
 * @method getIPType
 * @return {string} ip type
 */
function getIPType() {
    const networkInterfaces = os.networkInterfaces();
    let IPType = '';
    if (networkInterfaces
        && Array.isArray(networkInterfaces)
        && networkInterfaces.length > 0) {
        // getting the family of first network interface available
        IPType = networkInterfaces [
            Object.keys( networkInterfaces )[0]
        ][0].family;
    }
    return IPType;
}

module.exports=Defaults;


/***/ }),

/***/ "./node_modules/node-ipc/entities/EventParser.js":
/*!*******************************************************!*\
  !*** ./node_modules/node-ipc/entities/EventParser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Defaults = __webpack_require__(/*! ./Defaults.js */ "./node_modules/node-ipc/entities/Defaults.js");

class Parser{
  constructor(config){
    if(!config){
      config=new Defaults;
    }
    this.delimiter=config.delimiter;
  }

  format(message){
    if(!message.data && message.data!==false && message.data!==0){
        message.data={};
    }
    if(message.data['_maxListeners']){
        message.data={};
    }

    message=message.JSON+this.delimiter;
    return message;
  }

  parse(data){
    let events=data.split(this.delimiter);
    events.pop();
    return events;
  }
}

module.exports=Parser;


/***/ }),

/***/ "./node_modules/node-ipc/node-ipc.js":
/*!*******************************************!*\
  !*** ./node_modules/node-ipc/node-ipc.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const IPC = __webpack_require__(/*! ./services/IPC.js */ "./node_modules/node-ipc/services/IPC.js");

class IPCModule extends IPC{
    constructor(){
        super();
        //include IPC to make extensible
        Object.defineProperty(
            this,
            'IPC',
            {
                enumerable:true,
                writable:false,
                value:IPC
            }
        )
    }
}

module.exports=new IPCModule;


/***/ }),

/***/ "./node_modules/node-ipc/services/IPC.js":
/*!***********************************************!*\
  !*** ./node_modules/node-ipc/services/IPC.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Defaults = __webpack_require__(/*! ../entities/Defaults.js */ "./node_modules/node-ipc/entities/Defaults.js"),
    Client = __webpack_require__(/*! ../dao/client.js */ "./node_modules/node-ipc/dao/client.js"),
    Server = __webpack_require__(/*! ../dao/socketServer.js */ "./node_modules/node-ipc/dao/socketServer.js"),
    util = __webpack_require__(/*! util */ "util");

class IPC{
    constructor(){
        Object.defineProperties(
            this,
            {
                config      : {
                    enumerable:true,
                    writable:true,
                    value:new Defaults
                },
                connectTo   : {
                    enumerable:true,
                    writable:false,
                    value:connect
                },
                connectToNet: {
                    enumerable:true,
                    writable:false,
                    value:connectNet
                },
                disconnect  : {
                    enumerable:true,
                    writable:false,
                    value:disconnect
                },
                serve       : {
                    enumerable:true,
                    writable:false,
                    value:serve
                },
                serveNet    : {
                    enumerable:true,
                    writable:false,
                    value:serveNet
                },
                of          : {
                    enumerable:true,
                    writable:true,
                    value:{}
                },
                server      : {
                    enumerable:true,
                    writable:true,
                    configurable:true,
                    value:false
                },
                log         : {
                    enumerable:true,
                    writable:false,
                    value:log
                }
            }
        );
    }
}

function log(...args){
    if(this.config.silent){
        return;
    }

    for(let i=0, count=args.length; i<count; i++){
        if(typeof args[i] != 'object'){
            continue;
        }

        args[i]=util.inspect(
            args[i],
            {
                depth:this.config.logDepth,
                colors:this.config.logInColor
            }
        );
    }

    this.config.logger(
        args.join(' ')
    );
}

function disconnect(id){
    if(!this.of[id]){
        return;
    }

    this.of[id].explicitlyDisconnected=true;

    this.of[id].off('*','*');
    if(this.of[id].socket){
        if(this.of[id].socket.destroy){
            this.of[id].socket.destroy();
        }
    }

    delete this.of[id];
}

function serve(path,callback){
    if(typeof path=='function'){
        callback=path;
        path=false;
    }
    if(!path){
        this.log(
            'Server path not specified, so defaulting to',
            'ipc.config.socketRoot + ipc.config.appspace + ipc.config.id',
            this.config.socketRoot+this.config.appspace+this.config.id
        );
        path=this.config.socketRoot+this.config.appspace+this.config.id;
    }

    if(!callback){
        callback=emptyCallback;
    }

    this.server=new Server(
        path,
        this.config,
        log
    );

    this.server.on(
        'start',
        callback
    );
}

function emptyCallback(){
    //Do Nothing
}

function serveNet(host,port,UDPType,callback){
    if(typeof host=='number'){
        callback=UDPType;
        UDPType=port;
        port=host;
        host=false;
    }
    if(typeof host=='function'){
        callback=host;
        UDPType=false;
        host=false;
        port=false;
    }
    if(!host){
        this.log(
            'Server host not specified, so defaulting to',
            'ipc.config.networkHost',
            this.config.networkHost
        );
        host=this.config.networkHost;
    }
    if(host.toLowerCase()=='udp4' || host.toLowerCase()=='udp6'){
        callback=port;
        UDPType=host.toLowerCase();
        port=false;
        host=this.config.networkHost;
    }

    if(typeof port=='string'){
        callback=UDPType;
        UDPType=port;
        port=false;
    }
    if(typeof port=='function'){
        callback=port;
        UDPType=false;
        port=false;
    }
    if(!port){
        this.log(
            'Server port not specified, so defaulting to',
            'ipc.config.networkPort',
            this.config.networkPort
        );
        port=this.config.networkPort;
    }

    if(typeof UDPType=='function'){
        callback=UDPType;
        UDPType=false;
    }

    if(!callback){
        callback=emptyCallback;
    }

    this.server=new Server(
        host,
        this.config,
        log,
        port
    );

    if(UDPType){
        this.server[UDPType]=true;
        if(UDPType === "udp4" && host === "::1") {
            // bind udp4 socket to an ipv4 address
            this.server.path = "127.0.0.1";
        }
    }

    this.server.on(
        'start',
        callback
    );
}

function connect(id,path,callback){
    if(typeof path == 'function'){
        callback=path;
        path=false;
    }

    if(!callback){
        callback=emptyCallback;
    }

    if(!id){
        this.log(
            'Service id required',
            'Requested service connection without specifying service id. Aborting connection attempt'
        );
        return;
    }

    if(!path){
        this.log(
            'Service path not specified, so defaulting to',
            'ipc.config.socketRoot + ipc.config.appspace + id',
            (this.config.socketRoot+this.config.appspace+id).data
        );
        path=this.config.socketRoot+this.config.appspace+id;
    }

    if(this.of[id]){
        if(!this.of[id].socket.destroyed){
            this.log(
                'Already Connected to',
                id,
                '- So executing success without connection'
            );
            callback();
            return;
        }
        this.of[id].socket.destroy();
    }

    this.of[id] = new Client(this.config,this.log);
    this.of[id].id = id;
    this.of[id].path = path;

    this.of[id].connect();

    callback(this);
}

function connectNet(id,host,port,callback){
    if(!id){
        this.log(
            'Service id required',
            'Requested service connection without specifying service id. Aborting connection attempt'
        );
        return;
    }
    if(typeof host=='number'){
        callback=port;
        port=host;
        host=false;
    }
    if(typeof host=='function'){
        callback=host;
        host=false;
        port=false;
    }
    if(!host){
        this.log(
            'Server host not specified, so defaulting to',
            'ipc.config.networkHost',
            this.config.networkHost
        );
        host=this.config.networkHost;
    }

    if(typeof port=='function'){
        callback=port;
        port=false;
    }
    if(!port){
        this.log(
            'Server port not specified, so defaulting to',
            'ipc.config.networkPort',
            this.config.networkPort
        );
        port=this.config.networkPort;
    }

    if(typeof callback == 'string'){
        UDPType=callback;
        callback=false;
    }
    if(!callback){
        callback=emptyCallback;
    }

    if(this.of[id]){
        if(!this.of[id].socket.destroyed){

            this.log(
                'Already Connected to',
                id,
                '- So executing success without connection'
            );
            callback();
            return;
        }
        this.of[id].socket.destroy();
    }

    this.of[id] = new Client(this.config,this.log);
    this.of[id].id = id;
    this.of[id].path = host;
    this.of[id].port = port;

    this.of[id].connect();

    callback(this);
}

module.exports=IPC;


/***/ }),

/***/ "./src/main/find-open-socket.js":
/*!**************************************!*\
  !*** ./src/main/find-open-socket.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const net = __webpack_require__(/*! net */ "net");
const os = __webpack_require__(/*! os */ "os");
const { join } = __webpack_require__(/*! path */ "path");
const ipc = __webpack_require__(/*! node-ipc */ "./node_modules/node-ipc/node-ipc.js");

ipc.config.silent = true;

function isSocketTaken(name, fn) {
  return new Promise((resolve, reject) => {
    ipc.connectTo(name, () => {
      ipc.of[name].on('error', () => {
        ipc.disconnect(name);
        resolve(false);
      });

      ipc.of[name].on('connect', () => {
        ipc.disconnect(name);
        resolve(true);
      });
    });
  });
}

async function findOpenSocket() {
  let currentSocket = 1;
  console.log('checking', currentSocket);
  while (await isSocketTaken('myapp' + currentSocket)) {
    currentSocket++;
    console.log('checking', currentSocket);
  }
  console.log('found socket', currentSocket);
  return 'myapp' + currentSocket;
}

module.exports = findOpenSocket;


/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
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
/* harmony import */ var _find_open_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-open-socket */ "./src/main/find-open-socket.js");
/* harmony import */ var _find_open_socket__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_find_open_socket__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var electron_is_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! electron-is-dev */ "./node_modules/electron-is-dev/index.js");
/* harmony import */ var electron_is_dev__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(electron_is_dev__WEBPACK_IMPORTED_MODULE_4__);






let clientWin
let serverWin
let serverProcess

function createWindow(socketName) {
  clientWin = new electron__WEBPACK_IMPORTED_MODULE_1__["BrowserWindow"]({
    width: 1000,
    height: 700,
    webPreferences: {
      // nodeIntegration: false,
      nodeIntegration: true,
      // preload: __dirname + '/client-preload.js'
      preload: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('dist', 'preload.js'),
    },
    title: "SpaceTrash v0"
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

function createBackgroundProcess(socketName) {
  console.log('createBackgroundProcess')
  const bundlePath = 'dist/server.bundle.js';
  console.log(bundlePath);
  console.log(socketName);
  const args = [
    '--subprocess',
    electron__WEBPACK_IMPORTED_MODULE_1__["app"].getVersion(),
    socketName
  ];
  console.log(args)
  serverProcess = Object(child_process__WEBPACK_IMPORTED_MODULE_2__["fork"])(bundlePath, args);

  serverProcess.on('message', msg => {
    console.log('message: ', msg)
  })
}

electron__WEBPACK_IMPORTED_MODULE_1__["app"].on('ready', async () => {
  const serverSocket = await _find_open_socket__WEBPACK_IMPORTED_MODULE_3___default()()

  createWindow(serverSocket)

  createBackgroundProcess(serverSocket)
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

/***/ "dgram":
/*!************************!*\
  !*** external "dgram" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dgram");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map
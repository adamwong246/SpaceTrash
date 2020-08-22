!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/Users/adam/Programming/spaceTrash/src/node-express-passport-mongoose-auth",n(n.s=11)}([function(e,r){e.exports=require("mongoose")},function(e,r){e.exports=require("express")},function(e,r,n){var t=n(0),o=new t.Schema({name:String,x:Number,y:Number,x2:Number,y2:Number}),s=new t.Schema({name:String,x:Number,y:Number}),i=new t.Schema({name:String,rooms:[o],doors:[s]},{usePushEach:!0});i.virtual("shipMap").get((function(){if(this.rooms.length){var e={},r=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;this.rooms.forEach(e=>{for(var s=e.x;s<e.x2+2;s++)s<=r&&(r=s-1),s>=t&&(t=s+1);for(s=e.y;s<e.y2+2;s++)s<=n&&(n=s-1),s>=o&&(o=s+1)});for(var s=r;s<t;s++){e[s]=void 0===e[s]?{}:e[s];for(var i=n;i<o;i++)e[s][i]=" "}return this.rooms.forEach(r=>{for(var n=r.x;n<r.x2+1;n++)e[n]=void 0===e[n]?{}:e[n],e[n][r.y]="B",e[n][r.y2]="B";for(n=r.y;n<r.y2+1;n++)e[r.x]=void 0===e[r.x]?{}:e[r.x],e[r.x2]=void 0===e[r.x2]?{}:e[r.x2],e[r.x][n]="B",e[r.x2][n]="B";for(var t=r.x+1;t<r.x2;t++)for(var o=r.y+1;o<r.y2;o++)e[t][o]="f"}),this.doors.forEach(r=>{e[r.x][r.y]="d"}),{status:"ok",gridMap:e,xMin:r,xMax:t,yMin:n,yMax:o}}return{status:"no rooms"}})),e.exports=t.model("Ship",i)},function(e,r,n){var t=n(0),o=t.Schema,s=n(15),i=new o({username:String,password:String,name:String});i.plugin(s),e.exports=t.model("User",i)},function(e,r,n){var t=n(0),o=new t.Schema({name:String,x:Number,y:Number,direction:Number,ship:String,user:String});e.exports=t.model("Drone",o)},function(e,r){e.exports=require("http")},function(e,r,n){var t=n(0),o=new t.Schema({users:Array,chatLog:Array,name:String,gameState:{shipsWithoutFogOfWar:Array,dronesWithoutRays:Array}});e.exports=t.model("Session",o)},function(e,r,n){const t=n(8),o=n(16),s=(e,r)=>{e.gameState.shipsWithoutFogOfWar;e.gameState,e.userStates;var n=[];Object.keys(r).forEach(e=>{const t=r[e].map(r=>({droneId:e,timestamp:r.timestamp,instruction:r.instruction}));n=n.concat(t)});const t=n.sort(e=>e.timestamp);o(e,t)},i=e=>e.gameState.dronesWithoutRays.map(r=>{const n=e.gameState.shipsWithoutFogOfWar.filter(e=>r.ship===e.id)[0];return r.rays=t(r,n.matrix),r});e.exports={initializeState:(e,r,n)=>{((e,r,n)=>{const t={shipsWithoutFogOfWar:r.map(e=>{if(e.shipMap.gridMap){const t=e.shipMap.yMax-e.shipMap.yMin,o=e.shipMap.xMax-e.shipMap.xMin,s=2,i=new Array(t).fill("_").map(()=>new Array(o).fill("_").map(()=>new Array(s).fill("_")));for(var r=0;r<t;r++)for(var n=0;n<o;n++){const t=n+e.shipMap.xMin,o=r+e.shipMap.yMin;e.shipMap.gridMap[t][o]&&(i[r][n][0]=e.shipMap.gridMap[t][o])}e.matrix=i}return e}).map(e=>(e.matrix&&n.filter(r=>r.ship===e.id).forEach(r=>{e.matrix[Math.round(r.y)][Math.round(r.x)][1]=`drone-${r.id}`}),e)),dronesWithoutRays:n};e.gameState=t})(e,r,n),(e=>{const r={};e.gameState.dronesWithoutRays.forEach(e=>{r[e.id]=[{instruction:"NO_OP",timestamp:Date.now()}]}),s(e,r),i(e)})(e)},updateState:(e,r)=>(s(e,r),{dronesWithRays:i(e)})}},function(e,r){var n=60*Math.PI/180;const t=Math.ceil(320);const o=160/Math.tan(n/2),s=2*Math.PI;e.exports=(e,r)=>{const n=r.length,i=r[0].length,a=r;return Array.from(Array(t).keys()).map((r,u)=>{var c=1*(-t/2+r),d=Math.sqrt(c*c+o*o),f=Math.asin(c/d);f+=e.direction;const l={id:u,style:{position:"absolute",src:"/walls_3.png",height:0,width:0,left:0,top:0,zIndex:0,clip:""},rayDistance:0,x:0,y:0};(f%=s)<0&&(f+=s);for(var p,m=f>.75*s||f<.25*s,h=f<0||f>Math.PI,g=Math.sin(f),y=Math.cos(f),x=0,v=0,S=0,M=!1,w=m?1:-1,b=w*(N=g/y),I=m?Math.ceil(e.x):Math.floor(e.x),O=e.y+(I-e.x)*N;I>=0&&I<i&&O>=0&&O<n;){const r=I+(m?0:-1)>>0,n=O>>0;if("f"!==a[n][r][0]){x=(R=I-e.x)*R+(j=O-e.y)*j,p=O%1,m||(p=1-p),I,O,v=r,S=n,M=!0,!0;break}I+=w,O+=b}var N,_=h?-1:1,E=_*(N=y/g);for(O=h?Math.floor(e.y):Math.ceil(e.y),I=e.x+(O-e.y)*N;I>=0&&I<i&&O>=0&&O<n;){const r=O+(h?-1:0)>>0,n=I>>0;if("f"!==a[r][n][0]){var R,j,A=(R=I-e.x)*R+(j=O-e.y)*j;(!x||A<x)&&(x=A,I,O,v=n,S=r,p=I%1,h&&(p=1-p),M=!1);break}I+=E,O+=_}if(x){"d"===a[S][v][0]&&(l.style.src="/walls_4.png"),l.brenshams=((e,r,n,t,o)=>{var s=Math.abs(n-e),i=Math.abs(t-r),a=e<n?1:-1,u=r<t?1:-1,c=s-i;const d=[];for(;d.push({x:e,y:r,tile:o[r][e]}),e!==n||r!==t;){var f=2*c;f>-i&&(c-=i,e+=a),f<s&&(c+=s,r+=u)}return d})(Math.round(e.x),Math.round(e.y),v,S,a),x=Math.sqrt(x),x*=Math.cos(e.direction-f),l.rayDistance=x;var D=Math.round(o/x),T=1*D,W=Math.round((200-D)/2),B=Math.round(p*T);B>T-1&&(B=T-1),B+=M?T:0,l.style.height=D,l.style.width=2*T>>0,l.style.top=W-0,l.style.left=1*u-B,l.style.clip="rect(0px, "+(B+1)+"px, "+(0+D)+"px, "+B+"px)";var U=v-e.x,q=S-e.y,P=U*U+q*q;return l.style.zIndex=-1e3*P>>0,l.x=v,l.y=S,l}return l})}},function(e,r){e.exports=require("passport")},function(e,r,n){n(0);var t=n(9),o=n(3),s={home:function(e,r){r.render("index",{user:e.user})},register:function(e,r){r.render("register")},doRegister:function(e,r){o.register(new o({username:e.body.username,name:e.body.name}),e.body.password,(function(n,o){if(n)return r.render("register",{user:o});t.authenticate("local")(e,r,(function(){r.redirect("/")}))}))},login:function(e,r){r.render("login")},doLogin:function(e,r){t.authenticate("local")(e,r,(function(){r.redirect("/")}))},logout:function(e,r){e.logout(),r.redirect("/")},allUsers:function(e,r){o.find({},(function(n,t){r.render("allUsers",{allUsers:t,user:e.user})}))}};e.exports=s},function(e,r,n){n(12),n(13),e.exports=n(18)},function(e,r,n){var t=n(0);t.Promise=global.Promise,t.connect("mongodb://localhost/node-auth").then(()=>console.log("connection succesful")).catch(e=>console.error(e))},function(e,r,n){const t=n(5),o=n(14),s=n(4),i=n(6),a=n(2),u=n(3),c=n(7),d=(n(8),t.createServer({}));d.listen(5e3,()=>console.log("Web server start. http://localhost:5000"));const f=new o.Server({server:d});f.on("connection",e=>{e.send(JSON.stringify({msg:"user joined"})),console.log("connected"),e.room=[],e.on("error",e=>console.log(e)),e.on("close",e=>console.log("websocket closed"+e)),e.on("message",r=>{console.log("message: ",r);var n=JSON.parse(r);if(n.createdAt=Date.now(),n.join&&(console.log("joining: ",n.join),e.room.push(n.join)),n.room&&n.msg){const e=n.room.split("-");"session"===e[0]&&("user"===e[2]?n.msg.load?i.findById(e[1],(e,r)=>{l(r,r.gameState)}):n.msg.say?i.findByIdAndUpdate(e[1],{$push:{chatLog:{createdAt:Date.now(),msg:n.msg.say,user:e[3]}}},{},(r,n)=>{var t,o;t=e[1],o=n.users,i.findById(t,(e,r)=>{a.find({},(e,r)=>{s.find({},(e,r)=>{o.forEach(e=>{f.clients.forEach(r=>{const n=`session-${t}-user-${e}`;r.room.indexOf(n)>-1&&r.send(JSON.stringify({room:n,msg:{userState:void 0}}))})})})})})}):n.msg.commandQueues&&i.findById(e[1],(e,r)=>{c.updateState(r,n.msg.commandQueues);r.validate((function(e){e?console.log("invalid! ",e):(r.markModified("gameState"),r.save((function(e,n){if(e)return console.error(e);l(n,r.gameState)})))}))}):i.findByIdAndUpdate(e[1],{$push:{chatLog:n}},{},e=>{!function(e){console.log("broadcast, ",e.room),f.clients.forEach(r=>{console.log("- client.room",r.room),r.room.indexOf(e.room)>-1&&r.send(JSON.stringify(e))})}(n)}))}})});function l(e,r){u.find({},(n,t)=>{t.forEach(n=>{f.clients.forEach(t=>{const o=`session-${e._id}-user-${n._id}`;t.room.indexOf(o)>-1&&t.send(JSON.stringify({room:o,msg:r}))})})})}},function(e,r){e.exports=require("ws")},function(e,r){e.exports=require("passport-local-mongoose")},function(e,r,n){const t=n(17);e.exports=(e,r)=>{var n=e.gameState.dronesWithoutRays;return r.forEach(r=>{n=t(e,r,n)}),n}},function(e,r){e.exports=(e,r)=>e.gameState.dronesWithoutRays.map(e=>{if(e._id.toString()===r.droneId){if("DRONE_MOVE_FORWARD"===r.instruction){Math.round(e.x),Math.round(e.y);const r=e.x+.1*Math.cos(e.direction),n=e.y+.1*Math.sin(e.direction);Math.round(r),Math.round(n);e.x=r,e.y=n}if("DRONE_MOVE_BACK"===r.instruction){Math.round(e.x),Math.round(e.y);const r=e.x+-.1*Math.cos(e.direction),n=e.y+-.1*Math.sin(e.direction);Math.round(r),Math.round(n);e.x=r,e.y=n}"DRONE_ROTATE_LEFT"===r.instruction&&(e.direction=e.direction-.05),"DRONE_ROTATE_RIGHT"===r.instruction&&(e.direction=e.direction+.05)}else console.log("error"),console.log(e._id.toString(),r.droneId);return e})},function(e,r,n){const t=n(19),o=n(20),s=n(1),i=(n(21),n(5),n(22).Strategy),a=n(23),u=(n(0),n(9)),c=n(24);var d=n(25),f=n(26),l=n(27),p=n(29),m=n(31),h=s();h.set("views",c.join(__dirname,"views")),h.set("view engine","jade"),h.use(a("dev")),h.use(t.json()),h.use(t.urlencoded({extended:!1})),h.use(o()),h.use(n(33)({secret:"keyboard cat",resave:!1,saveUninitialized:!1})),h.use(u.initialize()),h.use(u.session()),h.use(s.static(c.join(__dirname,"public"))),h.use(s.static("dist")),h.use("/",d),h.use("/users",f),h.use("/sessions",l),h.use("/ships",p),h.use("/drones",m);var g=n(3);u.use(new i(g.authenticate())),u.serializeUser(g.serializeUser()),u.deserializeUser(g.deserializeUser()),h.use((function(e,r,n){var t=new Error("Not Found");t.status=404,n(t)})),h.use((function(e,r,n,t){n.locals.message=e.message,n.locals.error="development"===r.app.get("env")?e:{},n.status(e.status||500),n.render("error")})),e.exports=h},function(e,r){e.exports=require("body-parser")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("serve-favicon")},function(e,r){e.exports=require("passport-local")},function(e,r){e.exports=require("morgan")},function(e,r){e.exports=require("path")},function(e,r,n){var t=n(1).Router(),o=n(10);t.get("/",o.home),t.get("/register",o.register),t.post("/register",o.doRegister),t.get("/login",o.login),t.post("/login",o.doLogin),t.get("/logout",o.logout),e.exports=t},function(e,r,n){var t=n(1).Router(),o=n(10);t.get("/allUsers",o.allUsers),e.exports=t},function(e,r,n){var t=n(1).Router(),o=n(28);t.get("/",o.allSessions),t.get("/new",o.newSession),t.post("/",o.createSession),t.get("/:id",o.showSession),t.get("/:id/terminal",o.terminal),t.post("/:id/start",o.start),e.exports=t},function(e,r,n){n(0);const t=n(6),o=n(2),s=n(3),i=n(4),a=n(7),u={home:function(e,r){r.render("index",{user:e.user})},allSessions:function(e,r){t.find({},(function(n,t){r.render("allSessions",{allSessions:t,user:e.user})}))},newSession:function(e,r){s.find({},(function(n,t){r.render("newSession",{allUsers:t,user:e.user})}))},createSession:function(e,r){new t(e.body).save().then(e=>{r.redirect(`sessions/${e.id}`)})},showSession:function(e,r){t.findById(e.params.id,(function(n,t){r.render("session",{session:t,user:e.user})}))},terminal:function(e,r){t.findById(e.params.id,(function(n,t){r.render("terminal",{session:t,user:e.user})}))},start:function(e,r){const n=e.params.id;e.params.userId;t.findById(n,(e,t)=>{o.find({},(e,o)=>{i.find({},(e,s)=>{a.initializeState(t,o.map(e=>e.toObject({virtuals:!0})),s.map(e=>e.toObject({virtuals:!0}))),t.save().then(e=>{r.redirect(`/sessions/${n}`)})})})})}};e.exports=u},function(e,r,n){var t=n(1),o=n(30),s=t.Router();s.get("/",o.allShips),s.post("/",o.create),s.get("/new",o.newShip),s.get("/:id",o.show),s.post("/:id",o.edit),e.exports=s},function(e,r,n){n(0);var t=n(2),o={allShips:function(e,r){t.find({},(function(n,t){r.render("ships",{allShips:t,user:e.user})}))},newShip:function(e,r){r.render("newShip",{user:e.user})},create:function(e,r){new t(e.body).save().then(e=>{r.redirect(`ships/${e.id}`)})},show:function(e,r){t.findById(e.params.id,(function(n,t){r.render("ship",{ship:t.toObject({virtuals:!0}),user:e.user})}))},edit:function(e,r){const n=e.body;t.findByIdAndUpdate(e.params.id,{},(function(t,o){if(n.name)o.name=n.name;else if(n.newRoomX){const e={name:n.newRoomName,x:parseInt(n.newRoomX),y:parseInt(n.newRoomY),x2:parseInt(n.newRoomX2),y2:parseInt(n.newRoomY2)};o.rooms.push(e)}else if(n.newDoorX){const e={name:n.newDoorName,x:parseInt(n.newDoorX),y:parseInt(n.newDoorY)};o.doors.push(e)}o.save(()=>{r.redirect(`${e.params.id}`)})}))}};e.exports=o},function(e,r,n){var t=n(1),o=n(32),s=t.Router();s.get("/",o.all),s.post("/",o.create),s.get("/new",o.new),s.get("/:id",o.show),s.post("/:id",o.edit),e.exports=s},function(e,r,n){n(0);var t=n(4),o=n(2),s={all:function(e,r){t.find({},(function(n,t){r.render("drones",{drones:t,user:e.user})}))},new:function(e,r){o.find({},(n,t)=>{r.render("newDrone",{user:e.user,ships:t})})},create:function(e,r){const n=new t(e.body);n.user=e.user.id,n.save().then(e=>{r.redirect(`drones/${e.id}`)})},show:function(e,r){t.findById(e.params.id,(function(n,t){r.render("Drone",{drone:t.toObject({virtuals:!0}),user:e.user})}))},edit:function(e,r){}};e.exports=s},function(e,r){e.exports=require("express-session")}]);
export default {
  "hello": `
(x) => {
if (!x){
return "Please give me a name to greet. ex: Hello World ";
}
return "Hello " + x;
}
`,

  "foo0": `
(command) => {
if (!command[1]){
return "Please give me a number of foos to print. ex: foo0 3";
}
return Array.from(Array(parseInt(command[1])).keys()).map((i) => {
log('foobar')
return(i + foo);
}).join(' - ');
}
`,

  "forward": `
(command) => {
if (!command[1]){
return "Please give me the id of a drone. ex: forward 3 5";
}
if (!command[2]){
return "Please give me a number of steps to move forward. ex: forward 3 5";
}
const id = parseInt(command[1]);
const steps = parseInt(command[2]);

Array.from(Array(steps).keys()).map((i) => {
exec('DRONE_MOVE_FORWARD', {id: id});
}).join(' - ');
return('drone ' + id + ' is on auto pilot')
}
`,

  "left": `
(command) => {
if (!command[1]){
return "Please give me the id of a drone. ex: left 3 5";
}
if (!command[2]){
return "Please give me a number of steps to move left. ex: left 3 5";
}
const id = parseInt(command[1]);
const steps = parseInt(command[2]);

Array.from(Array(steps).keys()).map((i) => {
exec('DRONE_ROTATE_LEFT', {id: id});
}).join(' - ');
return('drone ' + id + ' is on auto pilot')
}
`,

  "back": `
(command) => {
if (!command[1]){
return "Please give me the id of a drone. ex: back 3 5";
}
if (!command[2]){
return "Please give me a number of steps to move back. ex: back 3 5";
}
const id = parseInt(command[1]);
const steps = parseInt(command[2]);

Array.from(Array(steps).keys()).map((i) => {
exec('DRONE_MOVE_BACK', {id: id});
}).join(' - ');
return('drone ' + id + ' is on auto pilot')
}
`,

  "right": `
(command) => {
if (!command[1]){
return "Please give me the id of a drone. ex: right 3 5";
}
if (!command[2]){
return "Please give me a number of steps to move right. ex: right 3 5";
}
const id = parseInt(command[1]);
const steps = parseInt(command[2]);

Array.from(Array(steps).keys()).map((i) => {
exec('DRONE_ROTATE_RIGHT', {id: id});
}).join(' - ');
return('drone ' + id + ' is on auto pilot')
}
`,

  "forward_video": `
(command, store) => {
log(store)
const id = store.activeVideoId
const steps = parseInt(command[1]) || 5;

Array.from(Array(steps).keys()).map((i) => {
exec('DRONE_MOVE_FORWARD', {id: id});
}).join(' - ');
return('drone ' + id + ' is on auto pilot')
}
`,

  "back_video": `
(command, store) => {
log(store)
const id = store.activeVideoId
const steps = parseInt(command[1]) || 5;

Array.from(Array(steps).keys()).map((i) => {
exec('DRONE_MOVE_BACK', {id: id});
}).join(' - ');
return('drone ' + id + ' is on auto pilot')
}
`,
  "left_video": `
(command, store) => {
log(store)
const id = store.activeVideoId
const steps = parseInt(command[1]) || 5;

Array.from(Array(steps).keys()).map((i) => {
exec('DRONE_ROTATE_LEFT', {id: id});
}).join(' - ');
return('drone ' + id + ' is on auto pilot')
}
`,

  "right_video": `
(command, store) => {
log(store)
const id = store.activeVideoId
const steps = parseInt(command[1]) || 5;

Array.from(Array(steps).keys()).map((i) => {
exec('DRONE_ROTATE_RIGHT', {id: id});
}).join(' - ');
return('drone ' + id + ' is on auto pilot')
}
`
}

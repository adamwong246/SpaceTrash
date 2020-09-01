const {NodeVM} = require('vm2');


const vm = new NodeVM({ require: { builtin: ['path'] } });
vm.run(`console.log(require('path'))`)

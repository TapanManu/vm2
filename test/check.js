const vm = require('vm');
vm.runInNewContext('this.constructor.constructor("return process")().exit()');
console.log('Never gets executed.');

const {VM} = require('vm2');
new VM().run('this.constructor.constructor("return process")().exit()');
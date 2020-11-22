const {VM, VMScript} = require('vm2');

const vm = new VM();
const script = new VMScript("Math.random()");
console.log(vm.run(script));
console.log(vm.run(script));
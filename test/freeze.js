//TYPICAL EXAMPLE OF SANDBOXING 
const {VM} = require('vm2');
const util = {
    add: (a, b) => a + b
}
const vm = new VM(); // Objects specified in sandbox can not be frozen.
vm.freeze(util,'util') // Second argument adds object to global.

vm.run('util.add = (a, b) => a - b'); // Fails silently when not in strict mode.
console.log(util.add(1, 1)); // returns 2



/*  this part runs ok  without using freeze
const util = {
    add: (a, b) => a + b
}

const vm = new VM({
    sandbox: {util}
});

vm.run('util.add = (a, b) => a - b');
console.log(util.add(1, 1)); // returns 0
*/
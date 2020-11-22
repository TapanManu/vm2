/*  retrieve values

*/
const {VM} = require('vm2');

const vm = new VM({
    timeout: 1000,
    sandbox: {}
});

let number = vm.run("1337");
console.log(number);

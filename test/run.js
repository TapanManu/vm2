// run sample code
const {VM} = require('vm2');

const vm = new VM({
    timeout: 1000,
    sandbox: {}
});

try{
vm.run("","./fs.js");

}
catch(err){
    console.error("failed to compile");
}


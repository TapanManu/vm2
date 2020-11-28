const {VM, NodeVM} = require('vm2');
const { performance,PerformanceObserver } = require('perf_hooks');
const fs = require('fs');
const file = '/home/tapan/vm2/vm2/test/file4.txt'; 
// By providing a file name as second argument you enable breakpoints
const script = 'module.exports = function fread(file){fs.readFileSync(file)}';
let ext = {};
//const asyn = 'fs.readFile(file,(error,data)=>{if(error){console.log(error);return;}';
const vm = new NodeVM( {
    console: 'inherit',
    // pass our declared ext variable to the sandbox
    sandbox: { ext },
    require: {
      external: true,
      builtin: ['fs', 'path'],
      root: './',
    },
  } );
try{
    let t1 = performance.now();
    vm.run(script);
    let t2 = performance.now();
    console.log(t2-t1);
}
catch(err){
    console.error('Failed to execute script.', err);
}
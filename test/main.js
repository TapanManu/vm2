const {VM, VMScript} = require('.');
const fs = require('fs');
const file = `${__dirname}/sandbox.js`;

// By providing a file name as second argument you enable breakpoints
const script = new VMScript(fs.readFileSync(file), file);

new VM().run(script);
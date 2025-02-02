const os = require('os')


console.log(os.userInfo());

console.log(`The system up time is ${os.uptime} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);


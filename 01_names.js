const john = 'john'
const abhi = 'abhi'


module.exports = {john, abhi};

const names = require('./01_names')
const sayHi = require('./02_utils')
require('./03-dragonSlayer')

sayHi(names.john)
sayHi(names.abhi)


const num1 = 10
const num2 = 90

function addValue(){
    console.log(`Sum is: ${num1 + num2}`);
     
}
const sayHi = (names) => {
    console.log(`Hello ${names}`);
    
}

module.exports = sayHi

addValue();
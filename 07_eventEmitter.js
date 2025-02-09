const EventEmitter = require('events')

const constantEmitter = new EventEmitter()

constantEmitter.on('response', (name, id) => {
	console.log(`Data Received user: ${name} with id: ${id}`);
})
constantEmitter.on('response', () => {
	console.log('Data Received');
})
constantEmitter.emit('response', 'john', 22)
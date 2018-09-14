const events = require('events');
// const EventEmitter = require('events').EventEmitter;

let emitter = new events.EventEmitter();

emitter.on('newEvent', (message) => {

    console.log(`Message: ${message}`);

});

emitter.emit('newEvent', 'Hello, guys! this is Diego Ortega');
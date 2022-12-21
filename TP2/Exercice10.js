const events = require ('events')

const anEvent = new events ();



anEvent.on("anEvent",() => {
    console.log('B')})

anEvent.emit("anEvent")
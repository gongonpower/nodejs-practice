var util = require('util')
var events = require('events')
var AudioDevice = {
    play: function(track) {
        console.log('playing : ', track)
    },
    stop: function() {
        console.log('stopped')
    }
}

function Musicplayer() {
    this.playing = false
    events.EventEmitter.call(this)
}
util.inherits(Musicplayer, events.EventEmitter)

var musicPlayer = new Musicplayer()

musicPlayer.on('play', function(track) {
    this.playing = true
    AudioDevice.play(track)
    for(var i=0;i<10;i++){
        console.log('test)
    }
})

musicPlayer.on('stop', function() {
    this.playing = false
    AudioDevice.stop()
})

musicPlayer.emit('play', 'The roots - the fire')
setTimeout(function() {
    musicPlayer.emit('stop')
}, 1000)

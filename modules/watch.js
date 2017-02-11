"use strict";
const WebSocket = require(`ws`),
    ws = new WebSocket(`ws://localhost:5672`)

var music = {
        playState: false,
        playingStateText: `Music paused`,
        shuffle: `NO_SHUFFLE`,
        repeat: `NO_REPEAT`,
        queue: [],
        volume: 100,
        lyrics: null,
        song: {
            title: null,
            artist: null,
            album: null,
            albumArt: null
        },
        time: {
            current: 0,
            total: 0
        }
    },
    playStateText = {
        true: `Music playing`,
        false: `Music paused`
    },
    jetty = new Jetty(process.stdout),
    meta;

ws.on(`message`, function(message, flags) {
    var payload = JSON.parse(message)
    var type = payload.channel,
        data = payload.payload;
    updateConsole()
    switch (type) {
        case `playState`:
            updateConsole()
            if (data) {
                playingStateText = playStateText[data]
                if (!running) {
                    //bot.connect()
                }
            } else {
                playingStateText = playStateText[data]
            }
            music.playState = data;
            break;
        case `shuffle`:
            music.shuffle = data;
            break;
        case `repeat`:
            music.repeat = data;
            break;
        case `queue`:
            music.queue = data;
            break;
        case `volume`:
            music.volume = data;
            break;
        case `track`:
            music.song = data;
            break;
        case `lyrics`:
            music.lyrics = data;
            break;
        case `time`:
            music.time = data;
            break;
    }
    module.exports = music
});

const fs = require('fs');

// loop here through all the audio files and use their names as dynamic value to add to object/the json file
let current = require('./src/assets/emojis.json')

const audio =  `"audio": "../assets/audio/artwe.mp3"`

current.emojis.push(audio[-1])
console.log(current)
// fs.writeFileSync(('emojis.json',JSON.stringify(current,null,4)))

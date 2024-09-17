const fs = require('fs')

function writeText(text) {
  fs.writeFileSync('output.txt', text)
}

exports.writeText = writeText
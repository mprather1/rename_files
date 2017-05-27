const fs = require('fs')
const dir = process.argv[2]
const moment = require('moment')

fs.readdir(dir, (err, files) => {
  for (var i = 0; i < files.length; i++) {
    const date = Date()
    fs.rename(dir + files[i], dir + moment().format('YYYY-MM-DD') + '-' + files[i] + '-' + (i+1))
  }
})
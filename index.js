const fs = require('fs')
const dirname = process.argv[2]
const moment = require('moment')

console.log(`Are you sure you want to rename the files in ${dirname}? y/n`)

process.stdin.setRawMode(true)

process.stdin.once('data', (data) => {
  data = data.toString()
  console.log(data.toString())
  if (data === 'y' || data === 'yes') {
    renameFiles(dirname)
  } else {
    process.exit()
  }
})

function renameFiles (dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(err)
    }

    for (var i = 0; i < files.length; i++) {
      fs.rename(dir + files[i], dir + moment().format('YYYY-MM-DD') + '-' + files[i] + '-' + (i + 1))
    }
    process.exit()
  })
}

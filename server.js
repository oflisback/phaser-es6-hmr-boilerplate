const express = require('express')
const path = require('path')
const app = express()

app.get('/bundle.js', function (req, res) {
  res.sendFile(__dirname + '/dist/bundle.js')
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.listen(3000, function () {
  console.log('Phaser.io minimal boilerplate example listening on port 3000!')
})

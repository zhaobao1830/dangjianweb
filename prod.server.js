var express = require('express')
var compression = require('compression')
var config = require('./config/index')
var axios = require('axios')

var port = 1830

var app = express()

var apiRoutes = express.Router()

app.use('/api', apiRoutes)

app.use(compression())

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})

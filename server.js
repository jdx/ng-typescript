var express = require('express')
var logger  = require('morgan')

var app = express()
app.use(logger('dev'))
app.use(express.static('assets'))
app.use(express.static('public'))

var server = app.listen(3000, function () {
  console.log('Server listening on', server.address().port)
})

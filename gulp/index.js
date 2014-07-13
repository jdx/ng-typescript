var fs = require('fs')

fs.readdirSync(__dirname).forEach(function (module) {
  require('./' + module)
})

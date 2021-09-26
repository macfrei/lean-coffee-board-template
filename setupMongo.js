const mongoose = require('mongoose')

function connectDatabase(url) {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to mongodb.'))
    .catch(error => console.log('Could not connect to mongodb: ' + error))
}

module.exports = { connectDatabase }

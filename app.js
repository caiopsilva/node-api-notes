const app = require('./config/server')
const mongoose = require('mongoose')
const Notes = require('./config/dbModel')
const port = process.env.PORT || 8000

mongoose.Promise = global.Promise
const db = mongoose.connect('mongodb://caiopsilva:mongo2233@ds123971.mlab.com:23971/api-notes')

app.listen(port, () => {
  console.log('http://localhost:8000')
})

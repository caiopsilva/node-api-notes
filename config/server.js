const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')

const app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

consign()
  .include('./routes')
  .into(app)

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
})

module.exports = app

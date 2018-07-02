const mongoose = require('mongoose')
const Schema = mongoose.Schema

let NotesSchema = new Schema({
  title: {type: String, required: true, max: 100},
  post: {type: String, required: true}
})

module.exports = mongoose.model('notes', NotesSchema)

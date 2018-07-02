const NotesDB = require('../config/dbModel')

module.exports = (app) => {
  app.get('/notes', (req, res) => {
    NotesDB.find({}, (err, note) => {
      if (err) { res.send(err) }
      res.json(note)
    })
  })

  app.post('/notes', (req, res) => {
    const newNote = new NotesDB(req.body)
    newNote.save((err, note) => {
      if (err) { res.send(err) }
      res.json(note)
    })
  })

  app.get('/notes/:id', (req, res) => {
    NotesDB.findById(req.params.id, (err, note) => {
      if (err) { res.send(err) }
      res.json(note)
    })
  })

  app.put('/notes/:id', (req, res) => {
    NotesDB.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, note) => {
      if (err) { res.send(err) }
      res.json(note)
    })
  })

  app.delete('/notes/:id', (req, res) => {
    NotesDB.remove({_id: req.params.id}, (err, note) => {
      if (err) { res.send(err) }
      res.json({message: 'Note successfully deleted'})
    })
  })
}

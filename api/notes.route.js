const express = require('express');
const notesRoutes = express.Router();

// Require notes model in our routes module
let Note = require('./note.model');

// Defined store route
noteRoutes.route('/add').post(function (req, res) {
  let note = new Notes(req.body);
  notes.save()
    .then(note => {
      res.status(200).json({'note': 'note in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
notesRoutes.route('/').get(function (req, res) {
    Note.find(function(err, notes){
    if(err){
      console.log(err);
    }
    else {
      res.json(notes);
    }
  });
});

// Defined edit route
noteRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Note.findById(id, function (err, note){
      res.json(note);
  });
});

//  Defined update route
noteRoutes.route('/update/:id').post(function (req, res) {
    Note.findById(req.params.id, function(err, note) {
    if (!note)
      res.status(404).send("data is not found");
    else {
        note.person_name = req.body.person_name;
        note.note_name = req.body.note_name;
        note.note_gst_number = req.body.note_gst_number;

        note.save().then(note => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
noteRoutes.route('/delete/:id').get(function (req, res) {
    Note.findByIdAndRemove({_id: req.params.id}, function(err, note){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = noteRoutes;
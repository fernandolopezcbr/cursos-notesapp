'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({

   
   
    curso: String,
    imagenuno: String,
    imagendos: String,
    imagenejemplo: String,
    contenido: String,
  
    materialapoyo: String,

    title: String,
    date: {type: Date, default: Date.now},
    description: String

});

module.exports = mongoose.model('Note', NoteSchema);
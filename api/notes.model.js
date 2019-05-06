const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Notes = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
},{
    collection: 'notes'
});

module.exports = mongoose.model('Notes', Notes);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const musicSchema = new Schema({
    
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    musictitle: {
        type: String,
        required: true,
        trim: true
    },
    


}, {
  timestamps: true  
});

const music = mongoose.model('music', musicSchema);

module.exports = music;
//////////////////////////
// Importing Dependencies
//////////////////////////
const mongoose = require('./connections')

/////////////////////////////////////
//Schemas and Models
////////////////////////////////////
const vocabSchema = new mongoose.Schema({
    word: {type: String, required: true},
    kana: String,
    engMeaning: {type: String, required: true},
    partOfSpeech: String,
    exampleSentence: String,
    sentenceMeaning: String
}, {timestamps: true})

const Vocab = mongoose.model("Vocab", vocabSchema)

//////////////////////
//Export the connection
/////////////////////////
module.exports = Vocab
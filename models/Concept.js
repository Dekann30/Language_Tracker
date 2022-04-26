//////////////////////////
// Importing Dependencies
//////////////////////////
const mongoose = require('./connection')

/////////////////////////////////////
//Schemas and Models
////////////////////////////////////
const conceptSchema = new mongoose.Schema({
    conceptName: {type: String, required: true},
    grammar: Array,
    conceptExplaination: String,
    exampleSentence: String,
    sentenceMeaning: String
}, {timestamps: true})

const Concept = mongoose.model("Concept", conceptSchema)

//////////////////////
//Export the connection
/////////////////////////
module.exports = Concept
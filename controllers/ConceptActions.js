//////////////////////////
// Importing Dependencies
//////////////////////////
const Concept = require('../models/Concept')
const conceptSeed = require('../models/conceptSeed')
const Vocab = require('../models/Vocab')

////////////////////////////////
// Actions(Controller Functions)
////////////////////////////////
const actions = {}

//seed
actions.seed = async (req,res)=>{
    await Concept.deleteMany({}).catch((err)=> res.send(err))
    await Concept.create(conceptSeed).catch((err)=> res.send(err))
    res.redirect('/japanese')
}

//index
actions.index = async (req,res)=>{
    try{
        const concepts = await Concept.find({})
        const vocab = await Vocab.find({})
        res.render('index', {concepts, vocab})
    } catch(err) { 
        res.send(err)
    }
//     const concept = await Concept.find({})
//     .catch((err)=> res.send(err))
//     res.render('index', {concept})
}



//////////////////////
//Export actions oject
//////////////////////
module.exports = actions
//////////////////////////
// Importing Dependencies
//////////////////////////
const Vocab = require('../models/Vocab')
const japaneseVocabSeed = require('../models/japaneseVocabSeed')

////////////////////////////////
// Actions(Controller Functions)
////////////////////////////////
const actions = {}


//index
actions.index = async (req,res)=>{
    const vocab = await Vocab.find({}).catch((err)=> res.send(err))
    res.render('index', {vocab})
}

//seed
actions.seed = async (req,res)=>{
    await Vocab.deleteMany({}).catch((err)=> res.send(err))
    const vocab = await Vocab.create(japaneseVocabSeed).catch((err)=> res.send(err))
    res.redirect('/vocab')
}

//new
actions.create = async (req,res)=>{
    await Vocab.create(req.body).catch((err)=> res.send(err))
    res.redirect('/vocab')
}

//delete

//update
actions.update = async (req,res)=>{
    const id = req.params.id
    const vocab = await Vocab.findById(id)
    await vocab.save()
    res.redirect('/vocab')
}

//create

//edit

//show

//////////////////////
//Export actions oject
//////////////////////
module.exports = actions
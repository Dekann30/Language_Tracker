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
    await Vocab.create(japaneseVocabSeed).catch((err)=> res.send(err))
    res.redirect('/vocab')
}

//new
actions.new = (req,res)=>{
    res.render('new')
}

//delete
actions.delete = async (req,res)=>{
    await Vocab.findByIdAndDelete(req.params.id).catch((err)=> res.send(err))
    res.redirect('/vocab')
}

//update
actions.update = async (req,res)=>{
    await Vocab.findByIdAndUpdate(req.params.id, req.body).catch((err)=> res.send(err))
    res.redirect(`/vocab/${req.params.id}`)
}

//create
actions.create = async (req,res)=>{
    let newWord = await Vocab.create(req.body).catch((err)=> res.send(err))
    res.redirect(`/vocab/${newWord._id}`)
}

//edit
actions.edit = async (req,res)=>{
    let edit = await Vocab.findById(req.params.id).catch((err)=> res.send(err))
    res.render('edit', {edit})
}

//show
actions.show = async (req,res)=>{
    let showWord = await Vocab.findById(req.params.id).catch((err)=> res.send(err))
    res.render('show', {word: showWord})
}

//////////////////////
//Export actions oject
//////////////////////
module.exports = actions
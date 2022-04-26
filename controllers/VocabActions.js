//////////////////////////
// Importing Dependencies
//////////////////////////
const Vocab = require('../models/Vocab')
const vocabSeed = require('../models/vocabSeed')

////////////////////////////////
// Actions(Controller Functions)
////////////////////////////////
const actions = {}

//seed
actions.seed = async (req,res)=>{
    await Vocab.deleteMany({}).catch((err)=> res.send(err))
    await Vocab.create(vocabSeed).catch((err)=> res.send(err))
    res.redirect('/japanese')
}

//index
actions.index = async (req,res)=>{
    const vocab = await Vocab.find({}).catch((err)=> res.send(err))
    res.render('index', {vocab})
}

//new
actions.new = (req,res)=>{
    res.render('new')
}

//delete
actions.delete = async (req,res)=>{
    await Vocab.findByIdAndDelete(req.params.id).catch((err)=> res.send(err))
    res.redirect('/japanese')
}

//update
actions.update = async (req,res)=>{
    await Vocab.findByIdAndUpdate(req.params.id, req.body).catch((err)=> res.send(err))
    res.redirect(`/japanese/${req.params.id}`)
}

//create
actions.create = async (req,res)=>{
    let newWord = await Vocab.create(req.body).catch((err)=> res.send(err))
    res.redirect(`/japanese/${newWord._id}`)
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
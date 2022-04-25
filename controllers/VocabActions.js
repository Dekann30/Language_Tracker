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
actions.new = (req,res)=>{
    res.render('new')
}

//delete
actions.delete = async (req,res)=>{
    const id = req.params.id
    await Vocab.findByIdAndDelete(id).catch((err)=> res.send(err))
}

//update
actions.update = async (req,res)=>{
    const id = req.params.id
    const vocab = await Vocab.findById(id).catch((err)=> res.send(err))
    await vocab.save()
    res.redirect('/vocab/:id')
}

//create
actions.create = async (req,res)=>{
    await Vocab.create(req.body).catch((err)=> res.send(err))
    res.redirect('/vocab')
}

//edit
actions.edit = (req,res)=>{
    const id = req.params.id
    Vocab.findById(id, (err, editedWord)=>{
        res.render('edit', {edit: editedWord})
    })
}

//show
actions.show = (req,res)=>{
    const id = req.params.id
    Vocab.findById(id, (err, showWord)=>{
        res.render('show', {word: showWord})
    })
    // const word = req.body
    
}

//////////////////////
//Export actions oject
//////////////////////
module.exports = actions
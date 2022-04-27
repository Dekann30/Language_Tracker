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
    try{
        await Vocab.deleteMany({})
        await Vocab.create(vocabSeed)
        res.redirect('/concepts')
    } catch(err) {
        res.send(err)
    }
}

//new
actions.new = (req,res)=>{
    res.render('newVocab')
}

//delete
actions.delete = async (req,res)=>{
    try{
        await Vocab.findByIdAndDelete(req.params.id)
        res.redirect('/concepts')
    } catch(err) {
        res.send(err)
    }
}

//update
actions.update = async (req,res)=>{
    try{
        await Vocab.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/vocab/${req.params.id}`)
    } catch(err) {
        res.send(err)
    }
}

//create
actions.create = async (req,res)=>{
    try{
        let newWord = await Vocab.create(req.body)
        res.redirect(`/vocab/${newWord._id}`)
    } catch(err) {
        res.send(err)
    }
}

//edit
actions.edit = async (req,res)=>{
    try{
        let edit = await Vocab.findById(req.params.id)
        res.render('editVocab', {edit})
    } catch(err) {
        res.send(err)
    }
}

//show
actions.show = async (req,res)=>{
    try{
        let showWord = await Vocab.findById(req.params.id)
        res.render('showVocab', {word: showWord})
    } catch(err) {
        res.send(err)
    }
}

//////////////////////
//Export actions oject
//////////////////////
module.exports = actions
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
    try{
        await Concept.deleteMany({})
        await Concept.create(conceptSeed)
        res.redirect('/concepts')
    } catch(err) {
        res.send(err)
    }
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
}

//new
actions.new = (req,res)=>{
    res.render('newConcept')
}

//delete
actions.delete = async (req,res)=>{
    try{
        await Concept.findByIdAndDelete(req.params.id)
        res.redirect('/concepts')
    } catch(err) {
        res.send(err)
    }
}

//update
actions.update = async (req,res)=>{
    try{
        await Concept.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/concepts/${req.params.id}`)
    } catch(err) {
        res.send(err)
    }
}

//create
actions.create = async (req,res)=>{
    try{
        let newConcept = await Concept.create(req.body)
        res.redirect(`/concepts/${newConcept._id}`)
    } catch(err) {
        res.send(err)
    }
}

//edit
actions.edit = async (req,res)=>{
    try{
        let edit = await Concept.findById(req.params.id)
        res.render('editConcept', {edit})
    } catch(err) {
        res.send(err)
    }
}

//show
actions.show = async (req,res)=>{
    try{
        let showConcept = await Concept.findById(req.params.id)
        res.render('showConcept', {concept: showConcept})
    } catch(err) {
        res.send(err)
    }
}

//////////////////////
//Export actions oject
//////////////////////
module.exports = actions
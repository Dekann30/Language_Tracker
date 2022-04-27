//////////////////////////
// Importing Dependencies
//////////////////////////
const express = require('express')
const router = express.Router()
const ConceptActions = require('./ConceptActions.js')
const { route } = require('./VocabController.js')

//////////////////////////
// Routes
//////////////////////////
router.get('/seed', ConceptActions.seed)
router.get('/', ConceptActions.index)
router.get('/new', ConceptActions.new)
router.delete('/:id', ConceptActions.delete)
router.put('/:id', ConceptActions.update)
router.post('/', ConceptActions.create)
router.get('/:id/edit',ConceptActions.edit)
router.get('/:id', ConceptActions.show)

////////////////////////
//Export the router
/////////////////////////
module.exports = router
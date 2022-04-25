//////////////////////////
// Importing Dependencies
//////////////////////////
const express = require('express')
const router = express.Router()
const VocabActions = require('./VocabActions.js')

//////////////////////////
// Routes
//////////////////////////
router.get('/', VocabActions.index)
router.get('/seed', VocabActions.seed)
router.get('/new', VocabActions.new)
router.delete('/:id', VocabActions.delete)
router.put('/:id', VocabActions.update)
router.post('/', VocabActions.create)
router.get('/:id/edit', VocabActions.edit)
router.get('/:id', VocabActions.show)

////////////////////////
//Export the router
/////////////////////////
module.exports = router
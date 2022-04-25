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

////////////////////////
//Export the router
/////////////////////////
module.exports = router
//////////////////////////
// Importing Dependencies
//////////////////////////
const express = require('express')
const router = express.Router()
const ConceptActions = require('./ConceptActions.js')

//////////////////////////
// Routes
//////////////////////////
router.get('/seed', ConceptActions.seed)
router.get('/', ConceptActions.index)







////////////////////////
//Export the router
/////////////////////////
module.exports = router
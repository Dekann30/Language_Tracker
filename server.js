//////////////////////////
// Importing Dependencies
//////////////////////////
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const morgan = require('morgan')
const VocabRouter = require('./controllers/VocabController')
const ConceptRouter = require('./controllers/ConceptController')

const app = express()
app.set('view engine', 'ejs')

//////////////////////////////
// Middleware 
//////////////////////////////
app.use(methodOverride('_method'))
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('static'))
app.use('/concepts', ConceptRouter)
app.use('/vocab', VocabRouter)


//////////////////
//Server Listener
/////////////////
const PORT = process.env.PORT
app.listen(PORT, ()=>console.log(`Hello~ listening on port ${PORT}`))
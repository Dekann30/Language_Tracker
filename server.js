//////////////////////////
// Importing Dependencies
//////////////////////////
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const morgan = require('morgan')
const VocabRouter = require('./controllers/VocabController')
const ConceptRouter = require('./controllers/ConceptController')
const axios = require('axios')
const cors = require('cors')

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
app.use(cors())

app.get('/', (req,res)=>{
    res.redirect('/concepts')
})

app.get('/api', async (req,res)=>{
    await axios(`https://api.unsplash.com/photos/random?client_id=${APIKEY}&query=japan`).then(data=>{
        res.json(data.data)
    })
})
//////////////////
//Server Listener
/////////////////
const PORT = process.env.PORT
app.listen(PORT, ()=>console.log(`Hello~ listening on port ${PORT}`))
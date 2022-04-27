//////////////////////////
// Importing Dependencies
//////////////////////////
require('dotenv').config()
const mongoose = require('mongoose')

//////////////////////////////
// Setup Database Connection
//////////////////////////////
const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect(DATABASE_URL, {
  useFindAndModify: false,
  useCreateIndex: true,
})
const cxn = mongoose.connection

cxn
.on('open', () => console.log('Mongo is Open'))
.on('closed', () => console.log('Mongo is closed'))
.on('error', (err) => console.log(err))

//////////////////////
//Export the connection
/////////////////////////
module.exports = mongoose
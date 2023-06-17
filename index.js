const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/connect')

dotenv.config()
connectToDatabase()

require('./modules/express')



// const {Person} = require("./person")
// const person = new Person("Lucas");

// require('./modules/path')
// require("./modules/fs")
// require("./modules/http")
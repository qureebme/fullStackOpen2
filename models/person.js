const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
    .then(whatever => console.log('connected to MongoDB'))
    .catch(err => console.log('error connecting to MongoDB:', err.message))


// the schema: declaration of document field types
const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Person = mongoose.model('Person', personSchema)

/*
db.on('open', ()=>{
    console.log('connected');
    setTimeout(() => {
        mongoose.connection.close()
        .then(()=>{
            console.log('closed')
        process.exit(1)
    })
    }, 2000);
})*/
/*
  .then(result => {
    console.log('connected to MongoDB')
    setTimeout(() => {

    },1000)
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })*/

  module.exports = Person;
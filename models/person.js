const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

var uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
    .then(whatever => console.log('connected to MongoDB'))
    .catch(err => console.log('error connecting to MongoDB:', err.message))

// the schema: declaration of document field types
const personSchema = new mongoose.Schema({
    name: {type: String, required: true, /*unique: true*/},
    number: {type: String, required: true, /*unique: true*/},
})

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Person = mongoose.model('Person', personSchema)

module.exports = Person;
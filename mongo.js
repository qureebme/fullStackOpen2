const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://qureeb:${password}@cluster0-bmqmg.mongodb.net/phonebook?retryWrites=true&w=majority`;

// fetching collection content
if(process.argv.length == 3){
    mongoose.connect(url, { useNewUrlParser: true })

    //show whats in collectn
    const db = mongoose.connection
    console.log('phonebook:\n')

    db.collection('people').find({}).then(

        data => data.forEach(item => {
            console.log(item.name, item.number)
            mongoose.connection.close()
            return
        })
    )
}

// incomplete CL args
if (process.argv.length == 4){
    console.log('Incorrect usage: Person must have name and number')
    console.log(`${'    >> node mongo <password>'}`)
    console.log(`${'    >> node mongo <password> <name> <number>'}`)
    process.exit(1)
}


// creating new entry
if(process.argv.length > 4){
    mongoose.connect(url, { useNewUrlParser: true })

    // the schema: declaration of record field types
    const personSchema = new mongoose.Schema({
        name: String,
        number: String,
    })
  
  const Person = mongoose.model('Person', personSchema)
  
  const person = new Person({
      name: process.argv[3],
      number: process.argv[4],
  })
  
  person.save().then(response => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}


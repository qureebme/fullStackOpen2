const dotenv = require('dotenv').config();
const Person = require('./models/person');
const ObjectID = require('mongodb').ObjectID;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors());

app.use(express.static('build'))


app.get('/api/persons', function(req, res){
  Person.find({})
  .then((data) => {res.json(data)})
  .catch((err) => {
    console.log('Cannot get data:')
    next(err)
  })
})

app.get('/info', function(req, res, next){
  Person.find({}).countDocuments()
  .then((data) => {
    res.send(
      `<p>Phonebook has info for ${data} people</p>
      <p>${new Date()}</p>`
    )
  })
  .catch((err) => {
    console.log('Cannot get info:', err)
    next(err)
  })
  
})

app.get('/api/persons/:id', function(req, res, next){
  Person.findById(req.params.id)
  .then((data) => {

    if (data) res.send(data)
    else res.status(404).send("Person not found")
  })
  .catch((err) => {
    console.log('Something went wrong:', err);
    next(err);
  })
})

app.put('/api/persons/:id', function(req, res, next){
  Person.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, doc){
    if (err) next(err)
    if (doc) res.json(doc)
    else res.status(400).end('Document has been deleted')
  })
})

app.delete('/api/persons/:id', function(req, res, next){
    Person.findOneAndDelete({_id: ObjectID(req.params.id)}, (err, result) => {
      if (err)  {
        console.log('Something went wrong:', err)
        next(err)
    }
      res.json(result)
    })
})

app.post('/api/persons', function(req, res){

    let newPerson = new Person(req.body);
    newPerson.save()
    .then((data) => res.json(data))
    .catch((err)=> {

      console.log('Cannot save data:', err)
      res.status(400).send('Bad request')
    })
})

const unknownRouteHandler = function(req, res, next){
  res.end('Unknown Route')
}
const errorhandler = function(err, req, res, next){
  console.log('Error: ', err);
  res.status(500).end('Something went wrong');
}

app.use(unknownRouteHandler)
app.use(errorhandler)

const port = process.env.PORT || PORT;
app.listen(port, function(){
    console.log(`server is running on port ${port}`);
})
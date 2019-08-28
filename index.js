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
  .catch((err) => {console.log('Cannot get data:', err)})
})

app.get('/info', function(req, res){
  Person.find({})
  .then((data) => {
    res.send(
      `<p>Phonebook has info for ${data.length} people</p>
      <p>${new Date()}</p>`
    )
  .catch((err) => {console.log('Cannot get info:', err)})
  })
  
})

app.get('/api/persons/:id', function(req, res){
  Person.find({})
  .then((data) => {
    let result = data.find((each) => each.id == req.params.id)

    if (result) res.send(result)
    else res.status(404).send("Person not found")
  })
  .catch((err) => {console.log('Something went wrong:', err)})
})

app.delete('/api/persons/:id', function(req, res){
    persons = persons.filter((each) => each.id != req.params.id)
    res.json(persons)
})

app.post('/api/persons', function(req, res){
    let body = req.body;
    if (!body.hasOwnProperty('name') || !body.hasOwnProperty('number')) {
        console.log('ERROR: name or number is missing from entry')
        return res.status(400).end('ERROR: name or number is missing from entry')
    }
    else if(persons.find((each) => each.name.toLowerCase() == body.name.toLowerCase())){
        console.log('ERROR: This name already exists');
        return res.status(400).end('ERROR: This name already exists');
    }
    const newEntry = {
        ...body,
        "id": parseInt(Math.random() * 123456789654)
    }
    persons.push(newEntry)
    res.json(persons)
})

const port = process.env.PORT || PORT;
app.listen(port, function(){
    console.log(`server is running on port ${port}`);
})
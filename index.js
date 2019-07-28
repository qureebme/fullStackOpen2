const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/api/persons', function(req, res){
    res.json(persons);
})

app.get('/info', function(req, res){
    res.send(
            `<p>Phonebook has info for ${persons.length} people</p>
            <p>${new Date()}</p>`
    )
})

app.get('/api/persons/:id', function(req, res){
    const person = persons.find((each) => each.id == req.params.id);
    if (person) res.json(person)
    else res.status(404).send('Person not found')
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
    else if(persons.find((each) => each.name == body.name.toLowerCase())){
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

app.use(function(err, req, res, next){
    res.status(500).send('Internal server error')
})

const port = 3001;
app.listen(port, function(){
    console.log(`server is running on port ${port}`);
})

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "qureeb hameed",
      "number": "+2348026785418",
      "id": 5
    }
  ]
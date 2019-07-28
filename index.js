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
const port = 3001;
app.listen(port, function(){
    console.log(`server is running on port ${port}`);
})

const persons = [
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
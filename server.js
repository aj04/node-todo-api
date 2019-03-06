const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const port = process.env.PORT || 3000;

let {mongoose} = require('./db/mongoose');
let {User} = require('./models/user');
let {Todo} = require('./models/todo');

let app = express();

//body is stored by body parser, so this middleware converts all the body contents to json object Body
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/todos', (request, response)=> {
  let todo = new Todo({
      text : request.body.text
  });
  todo.save().then((docs)=>{
    response.send(docs);
  },(err)=>{
    response.status(400).send(err);
  })
});

app.get('/todos', (req, res) => {
   Todo.find().then((docs)=>{
       res.send({docs});
   }, (err)=> {
       res.status(400).send(err);
   })
});

//GET todos/123445
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  if(!ObjectID.isValid(id)) {
      res.status(404).send();
      return console.log('This is not a valid id');
  }
  Todo.findById(id).then((doc)=> {
      res.send({doc});
  }, (e)=> {
      res.status(400).send(err);
  });


});


app.listen(port, ()=> {
    console.log(`The server is runing on ${port}`);
});




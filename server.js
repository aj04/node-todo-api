const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {User} = require('./models/user');
let {Todo} = require('./models/todo');

let app = express();

//body is stored by body parser, so this middleware converts all the body contents to json object Body
app.use(bodyParser.json());

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


app.listen(3000, ()=> {
    console.log(`The server is runing on 3000`);
});




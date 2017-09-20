//const MongoClient = require('mongodb').MongoClient;

//object Destructuring in ES6
const {MongoClient} = require('mongodb');

//this is place where we will put heroku port
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect to Db');
    }
    console.log('Connected to Mongodb');

    db.collection('Todos').find({completed : false}).toArray().then((docs) => {
        console.log('Todo');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Error in fetching todos ', err);
    });

    //While searching using Object id create a new object id using the way below.
    db.collection('Todos').find({_id : new Object('59c1d469d79fd91e4ef2c870')}).toArray().then((docs) => {
        console.log('Todo');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Error in fetching todos ', err);
    });


    db.collection('Users').find({name : 'Ajay Dubey'}).toArray().then((docs) => {
        console.log('Todo');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Error in fetching todos ', err);
    });
   db.close();
});
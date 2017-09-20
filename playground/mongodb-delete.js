//const MongoClient = require('mongodb').MongoClient;

//object Destructuring in ES6
const {MongoClient, ObjectID} = require('mongodb');

//this is place where we will put heroku port
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect to Db');
    }
    console.log('Connected to Mongodb');

    //deleteMany
    db.collection('Todos').deleteMany({text: 'Do Exercise'}).then((results)=>{
        console.log(results);
    });

    db.collection('Users').deleteMany({location: 'Boston'}).then((results)=>{
        console.log(results);
    });

    //deleteOne
    db.collection('Todos').deleteOne({completed: true}).then((results)=>{
        console.log(results);
    });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: true}).then((results)=>{
        console.log(results);
    });

    //Find one and delete with new Object('59c1e4b0343dbebaa2da3fa0')
    db.collection('Users').findOneAndDelete({_id : new ObjectID('59c1e5d3343dbebaa2da4065')}).then((results)=>{
           console.log(results);
    });

    db.close();
});
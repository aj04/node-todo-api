//const MongoClient = require('mongodb').MongoClient;

//object Destructuring in ES6
const {MongoClient} = require('mongodb');

//this is place where we will put heroku port
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect to Db');
    }
    console.log('Connected to Mongodb');

    // db.collection('Todos').insertOne(({
    //     text:'something to do',
    //     completed : false
    // }),(err, result) => {
    //     if(err) {
    //         return console.log('error inserting data ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne(({
        name:'Ajay Dubey',
        age : 28,
        location : 'Boston'
    }),(err, result) => {
        if(err) {
            return console.log('error inserting data ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });

    db.close();
});
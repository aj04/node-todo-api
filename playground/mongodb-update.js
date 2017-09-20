//const MongoClient = require('mongodb').MongoClient;

//object Destructuring in ES6
const {MongoClient, ObjectID} = require('mongodb');

//this is place where we will put heroku port
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect to Db');
    }
    console.log('Connected to Mongodb');


    // use this reference http://mongodb.github.io/node-mongodb-native/2.2/api/

    //use findOneAndUpdate()
    /**
     * findOneAndUpdate(filter, update, options, callback){Promise}
     */
    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('59c1e4bc343dbebaa2da3fac'),
        }, {
            $set : {
                location : 'Boston'
            },
            $inc : {
                age : +1
            }
        },{
            returnOriginal : false
        }
    ).then((results)=>{
        console.log(results);
    });

    db.close();
});
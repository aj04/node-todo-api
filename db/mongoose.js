let mongoose = require('mongoose');

// to use the Native Promise make mongoose promise equals to native global Promise
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
let mongoose = require('mongoose');

// create a model with validators and schema
let  Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    completedDateTime: {
        type: Date,
        default: Date.now
    }
});


module.exports = {Todo};
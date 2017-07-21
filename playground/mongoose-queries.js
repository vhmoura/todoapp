const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '594876898317da3cdc2e268e';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos', todos);
// });

// Todo.findOne({_id: id}).then((todo) => {
//     console.log('todo', todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        console.log('Id not found');
    }
    console.log('todo by id', todo);
}).catch((e) => console.log(e));

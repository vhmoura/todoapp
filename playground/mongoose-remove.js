const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//  console.log(result);
//});

Todo.findByIdAndRemove('593aabb360df9c9c89a4ef6f').then((result) => {
  console.log(result);
})
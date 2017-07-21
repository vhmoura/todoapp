var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://testuser:testuser@ds011715.mlab.com:11715/todoapp');

module.exports = {mongoose};

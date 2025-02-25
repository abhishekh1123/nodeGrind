const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, 'must provide name'],
    trim: true,
    max_length: [20, 'name cannot be more then 20 character'],
  }, 
  completed:{
    type: Boolean,
    default: false
  },
})

module.exports = mongoose.model('Task', TaskSchema)
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
      type:String
  },
 
},
{   
    collection:"users",
    timestamp:true
})

module.exports = mongoose.model('Course', userSchema)
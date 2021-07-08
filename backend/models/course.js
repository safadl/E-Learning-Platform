const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail:{
      type:String
  },
  video:{
      type:String
      
  },
  postedAt: {
    type: Date,
    required: true,
    default: Date.now
  },

},
{
    collection:"courses",
    timestamp:true
})

module.exports = mongoose.model('Course', courseSchema)
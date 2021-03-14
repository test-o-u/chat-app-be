const mongoose = require('mongoose')
// const { log } = require('async');
// const validator = require("validator");

const messageSchema = mongoose.Schema({
context:{
    type:String, require:true, trim:true, minlength:4
},
date:{
    type:String, require:true, trim:true, minlength:1

},
user:{
    type:mongoose.Schema.Types.ObjectId,ref:'User'
}


},
{
    timestamps: true,
  })

const User = mongoose.model('Message',messageSchema);
module.exports = User
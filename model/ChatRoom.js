const mongoose = require('mongoose')
// const { log } = require('async');
// const validator = require("validator");

const userSchema = mongoose.Schema({
name:{
    type:String, require:true, trim:true, minlength:4
},
password:{
    type:String, require:true, trim:true, minlength:1

},
createdBy:[{
    type: mongoose.Schema.Types.ObjectId,ref:"User"
}],
message:[{
    type: mongoose.Schema.Types.ObjectId,ref:"Message"
}]
},
{
    timestamps: true,
  }

),


const User = mongoose.model('User',userSchema);
module.exports = User
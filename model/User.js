const mongoose = require('mongoose')
// const { log } = require('async');
// const validator = require("validator");

const userSchema = mongoose.Schema({
    userName: {
        type: String, require: true, trim: true, minlength: 4
    }, displayName: {
        type: String, require: true, trim: true, minlength: 4
    }, avata: {
        type: String, require: true, trim: true, minlength: 4
    },
    password: {
        type: String, require: true, trim: true, minlength: 1

    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Message"
    }],
    chatRoom: [{
        type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom"
    }]
},
    {
        timestamps: true,
    }
    
    
    )


const User = mongoose.model('User', userSchema);
module.exports = User
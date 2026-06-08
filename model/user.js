const mongodb = require("mongoose");


const userSchema = mongodb.Schema({

    name: String,
    email:{
        type: String,
        unique: true
    },
    password: String,

})

module.exports = mongodb.model('User', userSchema);
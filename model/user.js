const mongodb = require("mongoose");


const userSchema = mongodb.Schema({

    name: string,
    email:{
        type: string,
        unique: true
    },
    password: string,

})

module.exports = mongodb.model('User', userSchema);
//import packages
const mongoose = require('mongoose');

//create the schema of the database
const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true  //essential
    },

    Email: {
    type: String,
    required: true,
    unique: true
    },
    
    Phone: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user' , 'admin' , 'responder'],
        default: 'user'
    }
},{
    timestamps: true
});

//export the model
module.exports = mongoose.model('user', userSchema);


//import packages
const mongoose = require ('mongoose');

//create the emergency alert schema
const alertSchema = new mongoose.Schema({
    //the user id who report the emergency
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    } ,
    
    //type of the emergency
    disasterType: {
        type: String,
        required: true,
        enum: ['Flood','Landslide','Fire','Accident','Other']
    },
    
    //description of the emergency
    description: {
        type: String,
        required: true
    },

    //serverity of the emergency
    serverity: {
        type: String,
        enum: ['Low','Medium','High','Critical'],
        required: true,
        default: 'Medium'
    },

    //details of the location
    location: {
        latitude: {
            type: Number,
            required: true
        },
        logitude: {
            type: Number,
            required: true
        }
    },

    //status of the alert
    status: {
        type: String,
        enum: ['Pending','Responded','Resolved'],
        default: 'Pending'
    }
});

//Export the alert model
module.exports = mongoose.model('Alert',alertSchema);
const mongoose = require('mongoose');
const { type } = require('os');

const dataSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: String,
    lastname: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required : true
    },
    dob:{
        type: Date,
        required: true
    },
    mobile: {
        type: String,
        required :true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpass: {
        type: String,
        required: true
    },
    hobbies: {
        type:[String],
        required: true
    },    
    state: {
        type :String,
        required : true,
    },
    district:{
      type: String,
      required :true
    },
    city: {
       type: String,
       required : true
    },
    profile: {
        type: String,
        required :true
    },
    document: {
       type: String,
       required: true
    },   
    status: {
        true : String

    }

})

module.exports = mongoose.model('Data', dataSchema)
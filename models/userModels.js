const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name : {
       type: String,
       required : true
    },
    email : {
        type: String,
        required : true
     },
     mobile : {
        type: Number,
        required : true
     },
     role : {
        type: String,
        required : true
     },
     designation: {
        type: String,
        required : true
     },
     blood_group: {
        type: String,
        required : true
     },
     date_of_joining: {
        type: String,
        required : true
     },
     address: {
        type: String,
        required : true
     },
     mail_address: {
        type: String,
        required : true
     },
     password: {
        type: String,
        required : true
     },
     gender: {
        type: String,
        required : true
     }
})
module.exports = mongoose.model('Users',userSchema);
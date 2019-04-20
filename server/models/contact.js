
// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

let mongoose = require('mongoose');

let contactSchema = mongoose.Schema({
    firstname:String,
    lastName:String,
    email:String,
    subject:String,
    message:String
},{
    collection :"usercontact"
});

module.exports= mongoose.model('contact',contactSchema);
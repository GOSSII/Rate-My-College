
// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910


let express = require("express");
let router = express.Router();
let mongoose = require('mongoose');
let contactModel = require('../models/contact');



// Contact Form Processs
router.post('/postcontact', (req, res,next) => {
  console.log(req.body);
  let newContact = contactModel({
        "firstname": req.body.firstname,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "subject": req.body.subject,
        "message": req.body.message,
  }); 

  contactModel.create(newContact, (err, contact) => {
    if(err){
      console.log(err);
      res.end(err);
    }else{
      console.log(contact);
      res.render("/contact", { title: "I will Contact you Soon .!." });
      res.redirect('/contact');
    }
  })  
  
});       

module.exports = router;
// module.exports = mongoose.model('contact', contactSchema);

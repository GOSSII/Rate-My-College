let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// define the User Model
let userModel = require("../models/user");
let User = userModel.User; // alias


// Get User Profile 
exports.getUserActions = (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.json({ success: true, data: users });
    }
  });
}

// Get User by Id
exports.getUserByIdActions = (req, res, next) => {
  let id = req.params.id;

  User.findById(id, (err, user) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
         
            res.json({success: true, data: user});
        }
    });
}
// Update User Profile
exports.putEditProfileActions = (req, res, next) => {
  let _id = req.params.id;
if(req.body){
  User
  .findOneAndUpdate({ _id: _id }, { $set: { username: req.body.username, email: req.body.email, displayName: req.body.displayName, password : req.body.password} }, function (err, user) {
    if(err) {
      console.log(err);
      res.end(err);
  }
  else {
      res.json({success: true, msg: 'Successfully Edited Task'});
  }
  })
}else{
  res.end(err);
}
}
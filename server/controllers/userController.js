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
exports.postEditProfileActions = (req, res, next) => {
  res.json("saas");
}
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let TODOModel = require('../models/toDo');




module.exports.getActiveSurvey = (req, res, next) => {
    TODOModel.find({ status: true }, (err, SurveyList) => {
        if (err) {
            res.send(err);
        }
        else {
            // console.log("SurveyList", SurveyList);
            // res.render('todo/index', {
            //     title: 'ToDo List',
            //     toDoList: toDoList,
            //     displayName: req.user ? req.user.displayName : ""
            // });
            res.json({success: true, msg: 'ToDo List Displayed Successfully', SurveyList: SurveyList});
        }
    });
}
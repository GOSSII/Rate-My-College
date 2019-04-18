let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let TODOModel = require('../models/toDo');
let surveyResponse = require('../models/surveyResponse');




module.exports.getActiveSurvey = (req, res, next) => {
    TODOModel.find({ status: true }, (err, SurveyList) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({success: true, msg: 'ToDo List Displayed Successfully', SurveyList: SurveyList});
        }
    });
}


module.exports.getActiveSurveyById = (req, res, next) => {
    let id = req.params.id;
    // console.log("id" , id)
        TODOModel.find({ _id: id }, (err, SurveyList) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({success: true, msg: 'ToDo List Displayed Successfully', SurveyList: SurveyList});
        }
    });
};


module.exports.postSurveyResponse = (req, res, next) => {
  // res.json("Data Addes ");
    let id = req.params.id;

    console.log("sas", id, req.body);
        let newToDO = surveyResponse({
            survey_id : id,
            title : req.body.title,
            desc : req.body.desc,
            questions: [{
                question: req.body.Q1,
                o1: req.body.Q1O1,
            },{
                question: req.body.Q2,
                o1: req.body.Q2O1,
            },
            {
                question: req.body.Q3,
                o1: req.body.Q3O1,
            }]
        });
    
        surveyResponse.create(newToDO, (err, surveyResponse) => {
            if(err) {
                console.log(err);
                res.end(err);
            }
            else {
                // res.redirect('/todo');
                res.json({success: true, msg: 'Successfully Added New Task'});
            }
        });
}


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

    TODOModel.findById(id, (err, ToDOObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
           // console.log("dada - > ", ToDOObject.status);
            const object = ({
                _id: ToDOObject._id,
                title: ToDOObject.title,
                desc : ToDOObject.desc,

                Q1 : ToDOObject.questions[0].question,
                Q1O1: ToDOObject.questions[0].o1,
                Q1O2: ToDOObject.questions[0].o2,
                Q1O3: ToDOObject.questions[0].o3,
                Q1O4: ToDOObject.questions[0].o4,

                Q2 : ToDOObject.questions[1].question,
                Q2O1: ToDOObject.questions[1].o1,
                Q2O2: ToDOObject.questions[1].o2,
                Q2O3: ToDOObject.questions[1].o3,
                Q2O4: ToDOObject.questions[1].o4,

                Q3 : ToDOObject.questions[2].question,
                Q3O1: ToDOObject.questions[2].o1,
                Q3O2: ToDOObject.questions[2].o2,
                Q3O3: ToDOObject.questions[2].o3,
                Q3O4: ToDOObject.questions[2].o4,
                
                status: ToDOObject.status

            });
            res.json({success: true, msg: 'Successfully Displayed Task to Edit', todo: object});
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
                o1: req.body.A1,
            },{
                question: req.body.Q2,
                o1: req.body.B1,
            },
            {
                question: req.body.Q3,
                o1: req.body.C1,
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


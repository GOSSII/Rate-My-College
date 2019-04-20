// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let TODOModel = require('../models/toDo');
let surveyResponse = require('../models/surveyResponse');

module.exports.displayToDoList = (req, res, next) => {
    let id = req.params.id;
    // console.log("id" , id)
        TODOModel.find({ user_id: id }, (err, SurveyList) => {
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
            res.json({success: true, msg: 'Survey List Displayed Successfully', SurveyList: SurveyList});
        }
    });
};


module.exports.displayAddPage = (req, res, next) => {
    // res.render('todo/add', {
    //     title: 'Add New ToDO Item',
    //     displayName: req.user ? req.user.displayName : ""
    // });
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}


module.exports.processAddPage = (req, res, next) => {
    let id = req.params.id;

console.log("sas", req.body);
    let newToDO = TODOModel({
        user_id : id,
        title : req.body.title,
        desc : req.body.desc,
        questions: [{
            question: req.body.Q1,
            o1: req.body.Q1O1,
            o2: req.body.Q1O2,
            o3: req.body.Q1O3,
            o4: req.body.Q1O4,
        },{
            question: req.body.Q2,
            o1: req.body.Q2O1,
            o2: req.body.Q2O2,
            o3: req.body.Q2O3,
            o4: req.body.Q2O4,
        },
        {
            question: req.body.Q3,
            o1: req.body.Q3O1,
            o2: req.body.Q3O2,
            o3: req.body.Q3O3,
            o4: req.body.Q3O4,
        }],
        status : 0
    });

    TODOModel.create(newToDO, (err, contactModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // res.redirect('/todo');
            res.json({success: true, msg: 'Successfully Added New Survey'});
        }
    });
    
}

module.exports.displayEditPage = (req, res, next) => {
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
            res.json({success: true, msg: 'Successfully Displayed Survey to Edit', todo: object});
        }
    });

}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    console.log("edit update content ->", req.body);
    let updatedContact = TODOModel({
        _id : id,
        title : req.body.title,
        desc : req.body.desc,
        questions: [{
            question: req.body.Q1,
            o1: req.body.Q1O1,
            o2: req.body.Q1O2,
            o3: req.body.Q1O3,
            o4: req.body.Q1O4,
        },{
            question: req.body.Q2,
            o1: req.body.Q2O1,
            o2: req.body.Q2O2,
            o3: req.body.Q2O3,
            o4: req.body.Q2O4,
        },
        {
            question: req.body.Q3,
            o1: req.body.Q3O1,
            o2: req.body.Q3O2,
            o3: req.body.Q3O3,
            o4: req.body.Q3O4,
        }],
        status : req.body.status
    });

    TODOModel.update({_id: id}, updatedContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            //  res.redirect('/todo');
            res.json({success: true, msg: 'Successfully Edited Survey', contact: updatedContact});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    console.log("delte thao a",id);
    TODOModel.remove({_id: id}, (err) => {
        surveyResponse.remove({survey_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Deleted Survey'});
       
    }
});
    });
}

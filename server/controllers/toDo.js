let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let TODOModel = require('../models/toDo');

module.exports.displayToDoList = (req, res, next) => {
    let id = req.params.id;
    // console.log("id" , id)
        TODOModel.find({ user_id: id }, (err, SurveyList) => {
        if (err) {
            return console.error(err);
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
        status : 1
    });

    TODOModel.create(newToDO, (err, contactModel) => {
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

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    TODOModel.findById(id, (err, ToDOObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            // res.render('todo/edit', {
            //     title: 'Edit Contact',
            //     todo: ToDOObject,
            //     displayName: req.user ? req.user.displayName : ""
            // });
            res.json({success: true, msg: 'Successfully Displayed Task to Edit', todo: ToDOObject});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = TODOModel({
        _id: id,
        task: req.body.task,
        desc: req.body.desc,
        completed: req.body.completed
    });

    TODOModel.update({_id: id}, updatedContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            //  res.redirect('/todo');
            res.json({success: true, msg: 'Successfully Edited Task', contact: updatedContact});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    TODOModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            //  res.redirect('/todo');
            res.json({success: true, msg: 'Successfully Deleeted Task'});
        }
    });
}


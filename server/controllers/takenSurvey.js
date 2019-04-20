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

    
        let newToDO = surveyResponse({
            survey_id : id,
            title : req.body.title,
            desc : req.body.desc,
            questions: [{
                question: req.body.Q1,
                o1: req.body.A1,
            },{
                question: req.body.Q2,
                o1: req.body.A2,
            },
            {
                question: req.body.Q3,
                o1: req.body.A3,
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


module.exports.getReportById = (req, res, next) => {
    let id = req.params.id;
    console.log("sasfdvdfv" , req.params.id);
    title: String;
    desc: String;
    // Storing question
    Question_1 : String;
    Question_2 : String;
    Question_3 : String;

    // Storing Options for compering 
    Q1_Ops_1 : String;
    Q1_Ops_2 : String;
    Q1_Ops_3 : String;
    Q1_Ops_4 : String;
    
    // Storing Survey Response for each options
    let users =0
    let Q1_Res_1 = 0;
    let Q1_Res_2 = 0;
    let Q1_Res_3 = 0;
    let Q1_Res_4 = 0;
    
    let Q2_Res_1 = 0;
    let Q2_Res_2 = 0;
    let Q2_Res_3 = 0;
    let Q2_Res_4 = 0;
    
    let Q3_Res_1 = 0;
    let Q3_Res_2 = 0;
    let Q3_Res_3 = 0;
    let Q3_Res_4 = 0;


    // Calling Survey to store questions and options for furture use
    TODOModel.findById(id, (err, ToDOObject) => {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else
        {
           title = ToDOObject.title;
           desc = ToDOObject.desc;
           Question_1 = ToDOObject.questions[0].question;
           Q1_Ops_1 = ToDOObject.questions[0].o1;
           Q1_Ops_2 = ToDOObject.questions[0].o2;
           Q1_Ops_3 = ToDOObject.questions[0].o3;
           Q1_Ops_4 = ToDOObject.questions[0].o4;

           Question_2 = ToDOObject.questions[1].question;
           Q2_Ops_1 = ToDOObject.questions[1].o1;
           Q2_Ops_2 = ToDOObject.questions[1].o2;
           Q2_Ops_3 = ToDOObject.questions[1].o3;
           Q2_Ops_4 = ToDOObject.questions[1].o4;

           Question_3 = ToDOObject.questions[2].question;
           Q3_Ops_1 = ToDOObject.questions[2].o1;
           Q3_Ops_2 = ToDOObject.questions[2].o2;
           Q3_Ops_3 = ToDOObject.questions[2].o3;
           Q3_Ops_4 = ToDOObject.questions[2].o4;

        

                    // 2nd Api call to the Survey Response 
                    surveyResponse.find({ survey_id: id }, (err, SurveyList) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                           
                            SurveyList.forEach(function (item) {
                                users++;
                                // Count the Response 
                                // Questions 1
                                if(Q1_Ops_1 === item.questions[0].o1  ){
                                    Q1_Res_1++;
                                } else if(Q1_Ops_2 === item.questions[0].o1  ){
                                    Q1_Res_2++;
                                } else if(Q1_Ops_3 === item.questions[0].o1  ){
                                    Q1_Res_3++;
                                } else if(Q1_Ops_4 === item.questions[0].o1  ){
                                    Q1_Res_4++;
                                }
 
                                  // Questions 2
                                  if(Q2_Ops_1 === item.questions[1].o1  ){
                                    Q2_Res_1++;
                                } else if(Q2_Ops_2 === item.questions[1].o1  ){
                                    Q2_Res_2++;
                                } else if(Q2_Ops_3 === item.questions[1].o1  ){
                                    Q2_Res_3++;
                                } else if(Q2_Ops_4 === item.questions[1].o1  ){
                                    Q2_Res_4++;
                                }

                                 // Questions 2
                                 if(Q3_Ops_1 === item.questions[2].o1  ){
                                    Q3_Res_1++;
                                } else if(Q3_Ops_2 === item.questions[2].o1  ){
                                    Q3_Res_2++;
                                } else if(Q3_Ops_3 === item.questions[2].o1  ){
                                    Q3_Res_3++;
                                } else if(Q3_Ops_4 === item.questions[2].o1  ){
                                    Q3_Res_4++;
                                }
                            })
                            // convert the response in percentage 
                            let Q1A1 = Q1_Res_1 / users * 100;
                            let Q1A2 = Q1_Res_2 / users * 100;
                            let Q1A3 = Q1_Res_3 / users * 100;
                            let Q1A4 = Q1_Res_4 / users * 100;

                            let Q2A1 = Q2_Res_1 / users * 100;
                            let Q2A2 = Q2_Res_2 / users * 100;
                            let Q2A3 = Q2_Res_3 / users * 100;
                            let Q2A4 = Q2_Res_4 / users * 100;
                            
                            let Q3A1 = Q3_Res_1 / users * 100;
                            let Q3A2 = Q3_Res_2 / users * 100;
                            let Q3A3 = Q3_Res_3 / users * 100;
                            let Q3A4 = Q3_Res_4 / users * 100;

                            let result = {
                                title,
                                desc,
                                Question_1,
                                Q1_Ops_1,
                                Q1_Ops_2,
                                Q1_Ops_3,
                                Q1_Ops_4,
                                Q1A1,
                                Q1A2,
                                Q1A3,
                                Q1A4,

                                Question_2,
                                Q2_Ops_1,
                                Q2_Ops_2,
                                Q2_Ops_3,
                                Q2_Ops_4,
                                Q2A1,
                                Q2A2,
                                Q2A3,
                                Q2A4,

                                Question_3,
                                Q3_Ops_1,
                                Q3_Ops_2,
                                Q3_Ops_3,
                                Q3_Ops_4,
                                Q3A1,
                                Q3A2,
                                Q3A3,
                                Q3A4,

                                users
                            }
                            
                            res.json({success: true, msg: 'Successfully Report', todo: result});
                        }
                    });




        
            
            //res.json({success: true, msg: 'Successfully Displayed Task to Edit', todo: object});
        }
    });

    
}


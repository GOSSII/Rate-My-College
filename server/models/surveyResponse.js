let mongoose = require('mongoose');

// create a model class
let surveyResponseSchema = mongoose.Schema(
    {
    survey_id :String,    
    title : String,
    desc : String,
    questions: [{
        question: String,
        o1: String,
    },{
        question: String,
        o1: String,
    },{
        question: String,
        o1: String,
    }]
},
{
    collection: "surveyResponse"
});

module.exports = mongoose.model('surveyResponse', surveyResponseSchema);
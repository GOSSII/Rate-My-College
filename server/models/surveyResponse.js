
// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

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
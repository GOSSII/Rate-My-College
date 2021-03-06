
// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

let mongoose = require('mongoose');

// create a model class
let toDoSchema = mongoose.Schema(
    {
    user_id :String,    
    title : String,
    desc : String,
    questions: [{
        question: String,
        o1: String,
        o2: String,
        o3: String,
        o4: String,
    },{
        question: String,
        o1: String,
        o2: String,
        o3: String,
        o4: String,
    },{
        question: String,
        o1: String,
        o2: String,
        o3: String,
        o4: String,
    }],
    status: Boolean
},
{
    collection: "surveys"
});

module.exports = mongoose.model('todo', toDoSchema);
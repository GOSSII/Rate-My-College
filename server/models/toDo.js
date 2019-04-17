let mongoose = require('mongoose');

// create a model class
let toDoSchema = mongoose.Schema(
    {
    user_id :String,    
    title : String,
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
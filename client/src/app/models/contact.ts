export class Contact {
  // tslint:disable-next-line:variable-name
  // _id: string;
  // task: String;
  // desc: String;
  // completed: String;
  
    user_id :String;
    title : String;
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
    }]
    status: Boolean
}
 
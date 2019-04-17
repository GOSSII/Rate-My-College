import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { survey } from 'src/app/models/survey';
@Component({
  selector: 'app-survey1',
  templateUrl: './survey1.component.html',
  styleUrls: ['./survey1.component.css']
})
export class Survey1Component implements OnInit {
  questionCount: number;
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  survey: survey;

  firstField = true;
  firstFieldName = 'Option A';
  isEditItems: boolean;
  constructor() {
     this.questionCount = 1;
  }

  ngOnInit() {
  }


  addFieldValue(index) {
    if (this.fieldArray.length <= 2) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {

    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }
  
  onSubmitForm(survey){
    console.log("result", survey)
  }

  onAddQuestion(){
    
  }


  // Logic For the Survey Storage 
  onSurveyPageSubmit(): void {
console.log(this.survey);
  }
}

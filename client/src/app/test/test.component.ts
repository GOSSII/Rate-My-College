import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = "app works!";
  json = {
    title: "Product Feedback Survey Example",
    showProgressBar: "top",
  };

  onSurveySaved(survey) {
    this.json = survey;
    console.log("result", this.json)
  }

  sendData(result) {
    //TODO update with your own behavior    
    console.log(result);
}
}
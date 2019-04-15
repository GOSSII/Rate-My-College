import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey1',
  templateUrl: './survey1.component.html',
  styleUrls: ['./survey1.component.css']
})
export class Survey1Component implements OnInit {
  questionCount: number;
  constructor() { 
     this.questionCount = 1;
  }

  ngOnInit() {
    
  }

}

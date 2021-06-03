import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-goals',
  templateUrl: './all-goals.component.html',
  styleUrls: ['./all-goals.component.css']
})
export class AllGoalsComponent implements OnInit {

  allGoals = [{
    index: '0',
    task: 'Add Goal',
    time: 'nothing',
    type: 'general'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  addNewGoal(newGoal: {
    index: any,
    task: string,
    time: string,
    type: string,
  }) {
    this.allGoals.push(newGoal);
  }

  removeGoal(event: any) {
    console.log(event.index);
  }



}
              // "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
              // "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",

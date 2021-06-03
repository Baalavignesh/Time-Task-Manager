import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-daily-goal',
  templateUrl: './daily-goal.component.html',
  styleUrls: ['./daily-goal.component.css']
})
export class DailyGoalComponent implements OnInit {
  @Input() getGoal: {
    index: any,
    task: string,
    time: string,
    type: string,
  };
  @Input() totalTask: number;
  @Input() currIndex: number;

  @Output() sendGoal = new EventEmitter<{
    index: any,
    task: string,
    time: string,
    type: string,
  }>();

  @Output() sendIndex = new EventEmitter<{
    index: number,
  }>();

  taskTime: string = '';
  taskType: string = 'small';
  taskIndex: number = 0;
  @ViewChild('goalDescription') taskName: ElementRef;



  constructor() { }

  ngOnInit(): void {
  }

  onItemChange(received) {
    let val = (<HTMLInputElement>received.target).value
    this.taskType = val;
    console.log(val)
  }

  addGoal() {
    var current = new Date();
    this.taskTime = current.toLocaleString();
    console.log(this.taskType);
    console.log(this.totalTask)
    console.log(this.taskIndex);
    console.log(this.taskName.nativeElement.value)
    this.sendGoal.emit({ index: this.totalTask + 1, task: this.taskName.nativeElement.value, time: this.taskTime, type: 'Big' })
  }

  taskCompleted(completedIndex) {
    console.log('congratulation');

  }

}

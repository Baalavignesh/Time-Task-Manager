import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css'],
  styles: [`
  .headstyle {
      display: flex;
      align-items: center;
      height: 70px;
    },
    .dateBox {
      padding: 30px 5px 15px 5px;
      text-align: center;
    }
    
  `]
})
export class AgeCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  now:any = new Date;
  duration:any;
  years:any;
  dob:any;
  showAge:boolean = false;

  updateDate(event: any) {
    this.dob = event.target.valueAsDate;
  }


  getDOB() {
    this.showAge = true;
    window.setInterval(()=> {
      this.now = new Date;
      this.duration = this.now - this.dob;
      this.years = this.duration / 31556900000;
      this.years = this.years.toFixed(9);
    }, 100);
  }

}

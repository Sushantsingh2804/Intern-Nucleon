import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  //initial variables or properties
  //active to activate div continer
  active = false;
  //date properties
  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth();
  year= this.date.getFullYear();
//selected date is the date selected value it is initialised to current date
  selectedDate = this.formatDate(this.date); //format date is used to format date
  no_of_days=Array.from(Array(31).keys()); // creating a array of 31 numbers for days in month
  //array of month names
  months=[
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];

  //EVENT functions
  //Goto next month function to update the month
  goToNextMonth(){
   this.month++;
   if(this.month>11){
     this.month=0;
     this.year++;
   }
   // gets the no of days to be dispalyed in the month
   this.getDate();
  }
  // updates the month when called
  goToPrevMonth(){
      this.month--;
      if(this.month<0){
        this.month=11;
        this.year--;
      }
      this.getDate();
  }
  // toggles the date div
  toggleDatePicker(){
    if(!this.active){
      this.active=true;
    }
    else{
      this.active=false;
    }
  }

  // updates year
  goToNextYear(){
   this.year++;
   this.getDate();

  }
  goToPrevYear(){
    this.year--;
    this.getDate();

  }
  // updates the selected date to the user selected value
  updated(i){
    let newDate=new Date(this.year + '-' + (this.month+1) + '-' + (i));
    this.selectedDate = this.formatDate(newDate);
    this.day=i;
    console.log(this.selectedDate);
    this.selected(i);
  }
  // highlights the selected date
  selected(i){
    if(this.day==i){
      return "#00ca85";
    }
  }

  //helper function
  //formats the date
  formatDate(d) {
    let day = d.getDate();
    if (day<10){
      day = '0'+ day;
    }
    let month = d.getMonth()+1;
    if (month<10) {
      month = '0'+ month;
    }


    let year = d.getFullYear();

    return day + '/' + month + '/' + year;
  }
//calculates and return number of days in a month
getDate(){
  // for February
    if(this.month==1){
      // for leap year
      if((this.year%100!=0 && this.year%4==0) || (this.year%400==0)){
      this.no_of_days=Array.from(Array(29).keys());


      }
      else{
        this.no_of_days=Array.from(Array(28).keys());
      }


    }
    // for months jan-july exluding feb
    else if(this.month<=6 && this.month>0){
      if(this.month%2==0){
        this.no_of_days=Array.from(Array(31).keys());
      }
      else{
        this.no_of_days=Array.from(Array(30).keys());
      }

    }
    // remaining months
    else{
      if(this.month%2!=0){
        this.no_of_days=Array.from(Array(31).keys());
      }
      else{
        this.no_of_days=Array.from(Array(30).keys());
      }
    }
    this.updated(this.day);

  }

  constructor() {


  }

  ngOnInit(): void {
  }


}

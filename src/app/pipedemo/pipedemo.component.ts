import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {


  employee ={
    name: "Vikram",
    BaseSalary: 50000,
    joinedOn : Date.now(),
    Qualification: "Btech",
    valueOfPie:3.148276,
    attendance:98/100,
    aboutEmployee: "An employee jncsd sjsjdns dsjdbjksc s jshduwd wwjinzjxnssdcnsb jsjdnkjsn"
  }
  constructor() { }

  ngOnInit(): void {
  }

}

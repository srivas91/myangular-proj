import { Component, OnInit } from '@angular/core';
import { Student } from 'src/Student';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // students:Student[]=[
  //   {'stuid':101,'stuname':'varshini'},
  //   {'stuid':202,'stuname':'abishek'}
  // ]

}

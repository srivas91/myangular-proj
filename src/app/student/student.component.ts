import { Component, OnInit } from '@angular/core';
import { Student } from 'src/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studservice:StudentService) { }
  mystud:Student[]=this.studservice.getStudents();
  ngOnInit(): void {
  }
   
}

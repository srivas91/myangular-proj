import { Injectable } from '@angular/core';
import { Student } from 'src/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  stud:Student[]=[{'id':101,'name':'mano'},{'id':102,'name':'karthik'}];

  getStudents():Student[]
  {
      return this.stud;
  }

  

  getStudById(id:number):any{
    let result = this.stud.find(Student => {
      return Student.id === id
    })
    // return result;
  }
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/service/student.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // student : Student=new Student(); 
  student: Observable<Student[]>; 
  constructor(private studentservice:StudentService) { }
  deleteMessage=false;  
  studentlist:any;  
  isupdated = false; 
  
  
  ngOnInit(){
    this.fetchdata();
  }
  fetchdata(){
    this.student = this.studentservice.getStudentsList();
  
  }
}
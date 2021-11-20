
// import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookManagementComponent } from './components/book-management/book-management.component';
import { TeacherManagementComponent } from './components/teacher-management/teacher-management.component';
import { StudentsComponent } from './components/students/students.component';
import { AdminComponent } from './components/admin/admin.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  // { path: 'add', component: CreateEmployeeComponent },
  {path:'Book',component:BookManagementComponent},
  {path:'Teacher',component:TeacherManagementComponent},
  {path:'Student',component:StudentsComponent},
  {path:'Studentlist',component:StudentListComponent},

  {path:'Admin',component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

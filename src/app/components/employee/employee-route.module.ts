import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeeComponent } from './employee.component';



const routes: Routes = [
{ path:'',component:EmployeeComponent, children:[
    { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
    { path: 'create-employee', component: EmployeeCreateComponent },
    { path: 'employee-list', component: EmployeeListComponent }  ,
    ]}
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule { }
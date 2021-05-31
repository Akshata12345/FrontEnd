import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {EmpApiService} from '../../../service/emp-api.service';
import { Employee } from '../../../model/employee';


declare var M:any;

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
  providers: [EmpApiService]
})
export class EmployeeCreateComponent implements OnInit {

  constructor(
    public empApiService :EmpApiService ,
    public router: Router,
    public ngZone: NgZone,
    ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset();
    this.empApiService.selectedEmployee = {
      _id:"",
      name:"",
      email:"",
      company:"",
      department:"",
      role:""
    }
  }

  refreshEmployeeList() {
    this.empApiService.getEmployeeList().subscribe((res) => {
      this.empApiService.employees = res as Employee[];
    })
  }
  
  onSubmit(form : NgForm){
    if(form.value._id ==""){
    this.empApiService.postEmployee(form.value).subscribe((res) => {
      this.ngZone.run(() => this.router.navigateByUrl('/employee/employee-list'))
      this.resetForm(form);
      this.refreshEmployeeList()
      M.toast({ html: 'Saved successfully', classes:'rounded'});
    });
  }
  else { 
    this.empApiService.putEmployee(form.value).subscribe((res) => {
      this.ngZone.run(() => this.router.navigateByUrl('/employee/employee-list'))
      this.resetForm(form);
      this.refreshEmployeeList()
      M.toast({ html: 'Updated successfully', classes:'rounded'});
    });
  }
  }
}

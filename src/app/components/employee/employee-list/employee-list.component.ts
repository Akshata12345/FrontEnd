import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from '../../../model/employee';
import {EmpApiService} from '../../../service/emp-api.service';

declare var M: any;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmpApiService]
})
export class EmployeeListComponent implements OnInit {
  Employee:any = [];

  constructor(public empApiService :EmpApiService) { }

  columnDefs = [
    {  headerName: 'EmployeeName', field: 'name', sortable: true, filter: true },
    {  headerName: 'Email',field: 'email', sortable: true, filter: true },
    {  headerName: 'Company',field: 'company', sortable: true, filter: true },
    {  headerName: 'Department',field: 'department', sortable: true, filter: true },
    {  headerName: 'Role',field: 'role', sortable: true, filter: true }
  ];
    rowData : any;

  ngOnInit(): void {
    this.refreshEmployeeList();
    this.rowData = this.empApiService.getEmployees();
  }

  refreshEmployeeList() {
    this.empApiService.getEmployeeList().subscribe((res) => {
      this.empApiService.employees = res as Employee[];
    })
  }

  onEdit(emp : Employee){
    this.empApiService.selectedEmployee = emp;
  }

  onDelete(_id:string, form:NgForm){
    if(confirm('Are you sure to delete this record ?') == true){
      this.empApiService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded'});
      })
    }
  }

}

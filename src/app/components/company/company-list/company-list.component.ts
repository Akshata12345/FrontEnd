import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Company } from '../../../model/company';
import {CompApiService} from '../../../service/comp-api.service';

declare var M: any;

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [CompApiService]
})
export class CompanyListComponent implements OnInit {

  Company:any = [];

  constructor(public compApiService :CompApiService) {}

  columnDefs = [
    {  headerName: 'CompanyName', field: 'name', sortable: true, filter: true },
    {  headerName: 'CompanyCode',field: 'code', sortable: true, filter: true },
    {  headerName: 'Location',field: 'location', sortable: true, filter: true }
  ];
    rowData : any;

  ngOnInit() {
    this.refreshCompanyList();
    this.rowData = this.compApiService.getCompanies();
    
  }

  refreshCompanyList() {
    this.compApiService.getCompanyList().subscribe((res) => {
      this.compApiService.companies = res as Company[];
    })
  }

  onEdit(comp : Company){
    this.compApiService.selectedCompany = comp;
  }

  onDelete(_id:string, form:NgForm){
    if(confirm('Are you sure to delete this record ?') == true){
      this.compApiService.deleteCompany(_id).subscribe((res) => {
        this.refreshCompanyList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded'});
      })
    }
  }

}

import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {CompApiService} from '../../../service/comp-api.service';
import { Company } from '../../../model/company';


declare var M:any;

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css'],
  providers: [CompApiService]
})
export class CompanyCreateComponent implements OnInit {

  constructor(
    public compApiService :CompApiService ,
    public router: Router,
    public ngZone: NgZone,
    ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset();
    this.compApiService.selectedCompany = {
      _id:"",
      name:"",
      code:"",
      location:""
    }
  }

  refreshCompanyList() {
    this.compApiService.getCompanyList().subscribe((res) => {
      this.compApiService.companies = res as Company[];
    })
  }
  
  onSubmit(form : NgForm){
    if(form.value._id ==""){
    this.compApiService.postCompany(form.value).subscribe((res) => {
      this.ngZone.run(() => this.router.navigateByUrl('/company/company-list'))
      this.resetForm(form);
      this.refreshCompanyList()
      M.toast({ html: 'Saved successfully', classes:'rounded'});
    });
  }
  else { 
    this.compApiService.putCompany(form.value).subscribe((res) => {
      this.ngZone.run(() => this.router.navigateByUrl('/company/company-list'))
      this.resetForm(form);
      this.refreshCompanyList()
      M.toast({ html: 'Updated successfully', classes:'rounded'});
    });
  }
  }

 
}

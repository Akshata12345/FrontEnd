import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-route.module';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    CompanyCreateComponent,
    CompanyListComponent,
    CompanyComponent
  ],
  imports: [
   CommonModule,
   CompanyRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   AgGridModule.withComponents([])
   
  
   
  ],
  providers: []
  
 
})
export class CompanyModule { }
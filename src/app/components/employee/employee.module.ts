import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-route.module';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';

import { MaterialModule } from './../../material/material.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeComponent
],
  imports: [
   CommonModule,
   EmployeeRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   MaterialModule,
   AgGridModule.withComponents([])
  ],
  providers: []
  
 
})
export class EmployeeModule { }
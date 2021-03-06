import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyListComponent } from './company-list/company-list.component';

import { CompanyComponent } from './company.component';



const routes: Routes = [
{ path:'',component:CompanyComponent, children:[
    { path: '', pathMatch: 'full', redirectTo: 'create-company' },
    { path: 'create-company', component: CompanyCreateComponent },
    { path: 'company-list', component: CompanyListComponent }  ,
    ]}
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompanyRoutingModule { }
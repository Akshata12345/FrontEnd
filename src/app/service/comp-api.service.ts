import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Company} from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompApiService {
  selectedCompany :Company;
  companies: Company[];
  readonly baseURL = 'http://localhost:4000/companies';

  constructor(public http : HttpClient) { }

  getCompanies() {
    return this.http.get(`${this.baseURL}`);
  }

  postCompany(comp : Company){
      return this.http.post(this.baseURL, comp);
  }

  getCompanyList() {
    return this.http.get(this.baseURL);
  }

  putCompany(comp: Company) {
    return this.http.put(this.baseURL + `/${comp._id}`, comp);
  }

  deleteCompany(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

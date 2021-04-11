import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer';
import { ISingleResponseModel } from '../models/single-response-model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<ICustomer> {

  customer:ICustomer;

  constructor(protected http:HttpClient) { 
    super(http, 'customers')
  }
 
  getByUserId(id: any): Observable<ISingleResponseModel<ICustomer>> {
    
    return this.http.get<ISingleResponseModel<ICustomer>>(this.apiUrl +"getbyuserid?id="+ id);
  }
}

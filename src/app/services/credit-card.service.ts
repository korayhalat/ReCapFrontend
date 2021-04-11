import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreditCard } from '../models/credit-card';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService extends BaseService<ICreditCard>  {

  constructor(protected http:HttpClient) {
    super(http,'creditcard');
   }
}

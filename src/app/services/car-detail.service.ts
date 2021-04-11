import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarDetail } from '../models/car-detail';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService extends BaseService<ICarDetail>{

  constructor(protected http: HttpClient) {
    super(http,'cardetails');
   }
}

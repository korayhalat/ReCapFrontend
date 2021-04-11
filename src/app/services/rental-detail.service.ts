import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRentalDetail } from '../models/rental-detail';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService extends BaseService<IRentalDetail> {
  checkFindeksScore(id: number) {
    throw new Error('Method not implemented.');
  }
  value:IRentalDetail;
  isNew:boolean;
  isShow:boolean;
  activeIndex:number=0;

  constructor(protected http: HttpClient) {
    super(http,'rentals')
   }
}

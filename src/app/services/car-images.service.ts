import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarImages } from '../models/carimages';
import { IListResponseModel } from '../models/list-response-model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarImagesService extends BaseService<ICarImages> {

  constructor(protected http:HttpClient) { 
    super(http,'carimages')
  }

  getImagesByCarId(carId:number):Observable<IListResponseModel<ICarImages>>{
    return this.http.get<IListResponseModel<ICarImages>>(this.apiUrl+'getbycarid/'+carId);
  }
}

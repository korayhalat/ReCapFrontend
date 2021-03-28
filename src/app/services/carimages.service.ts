import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImages } from '../models/carimages';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root',
})
export class CarImagesService {
  apiUrl= 'https://localhost:61529/api/';
  constructor(private httpClient: HttpClient) {}

  getCarImages() : Observable<ListResponseModel<CarImages>>{
    let newPath = this.apiUrl + "carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }

  getCarImagesById(carId: number) : Observable<ListResponseModel<CarImages>>{
    let newPath = this.apiUrl + "carimages/getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  } 
}
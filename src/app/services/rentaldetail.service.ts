import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentaldetail';

@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {

  apiUrl = 'http://localhost:61529/api/';

    constructor(private httpClient : HttpClient) {}
    
    getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
      let newPath = this.apiUrl + "rentals/getrentaldetails";
      return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
    }
    getById(carId:number):Observable<ListResponseModel<RentalDetail>>{
      let newPath = this.apiUrl+"cars/rentaldetail/getbyId?carId="+ carId;
      return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl)
    }
  }
    

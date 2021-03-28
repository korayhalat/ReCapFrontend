import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentaldetail';

@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {

  apiUrl = 'http://localhost:61529/api/rentals/getrentaldetails';

    constructor(private httpClient : HttpClient) {}
    
    getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
      return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl);
    }
}

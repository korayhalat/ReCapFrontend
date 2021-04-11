import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ICar } from '../models/car';
import { IRentalDetail } from '../models/rental-detail';
import { IResponseModel } from '../models/response-model';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService extends BaseService<IRentalDetail> {

  value:IRentalDetail;
  car:ICar;
  isNew:Boolean;
  isShow:Boolean;
  activeIndex:number=0;

  constructor(protected http:HttpClient,
    private authService: AuthService,
    private customerService: CustomerService,
    private toastrService: ToastrService) {
    super(http, 'rentals')
   }

   getFindeksScore(carId:number, customerId:number):Observable<IResponseModel>{
    let newPath=this.apiUrl+"findekscontrol?carId="+carId+"&customerId="+customerId;
    return this.http.get<IResponseModel>(newPath);
   }

   checkFindeksScore(carId:number){
    let id = this.authService.user.userId
    this.customerService.getByUserId(id).subscribe(response => {
      this.customerService.customer = response.data
      let customerId = this.customerService.customer.customerId;
      this.getFindeksScore(carId,customerId).subscribe(data=>{
        this.toastrService.success(data.message)
      },responseError=>{
        this.isShow = false;
        this.toastrService.error(responseError.error.message)
      });
  })
   }
}

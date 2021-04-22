import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IRentalDetail } from 'src/app/models/rental-detail';
import { AuthService } from 'src/app/services/auth.service';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit,OnChanges {
  // @Input() rentDetail:IRentalDetail;
  nowValue:Date;
  rentDate:Date;
  returnDate?:Date;
  rent : IRentalDetail;
  items: MenuItem[];
  minReturn:Date = new Date();

  constructor(public rentService: RentalDetailService,private authService : AuthService) { }

  ngOnInit(): void {

    this.items = [
      {label: 'Rental Dates'},
      {label: 'Payment'}
    ];
    this.setData();
  }

  ngOnChanges(){
    
    this.setData();
  }

  rentSelect(e:any){
  let rentDate:Date = new Date(e);
  this.minReturn = rentDate;
  if(this.rentService.value.returnDate &&  this.rentService.value.returnDate.getTime() < rentDate.getTime()){
  this.rentService.value.returnDate = rentDate;
  }

  };

  setData(){
    this.nowValue = new Date();
    this.rentDate = this.rentService.value ? this.rentService.value.rentDate : this.nowValue;
    this.returnDate = this.rentService.value ? this.rentService.value.returnDate : null;  
    
  }
  createRent(){
    this.rentService.activeIndex=1
    let id=this.authService.user.userId;

    let rent:IRentalDetail={
      customerId:id,
      rentDate:this.rentDate,
      returnDate:this.rentDate,
      carId:this.rentService.value.carId
    }
    this.rent=rent;
  }

}

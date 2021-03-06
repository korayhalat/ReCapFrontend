import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/car';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-car-operation',
  templateUrl: './car-operation.component.html',
  styleUrls: ['./car-operation.component.scss']
})
export class CarOperationComponent implements OnInit {

  activeIndex:number = 0;
  car:ICar;
  detailHeader:string="";
  rentalDetailShow:boolean;

  
  constructor(public rentService:RentalDetailService) { }

  ngOnInit(): void {
  }

  getCarDetail(e:ICar){
    this.car = e;
    if(e){     
      this.tabChange(1);
      this.activeIndex = 1;
    }
  }

  tabChange(e:any){
    this.detailHeader = e == 0 ? "" :"Car Detail";
  }
}

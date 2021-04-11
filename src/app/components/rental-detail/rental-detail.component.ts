import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
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
  items: MenuItem[];
  minReturn:Date = new Date();
  constructor(public rentService: RentalDetailService) { }

  ngOnInit(): void {

    this.items = [
      {label: 'Rental Dates'},
      {label: 'Payment'}
    ];
    // this.setData();
  }

  ngOnChanges(){
    // console.log("change");    
    // this.setData();
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

}

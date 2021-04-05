import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IRentalDetail } from 'src/app/models/rental-detail';
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

  constructor(public rentService: RentalDetailService) { }

  ngOnInit(): void {

    this.items = [
      {label: 'Rental Dates'},
      {label: 'Payment'}
    ];
    this.setData();
  }

  ngOnChanges(){
    console.log("change");
    
    this.setData();
  }

  setData(){
    this.nowValue = new Date();
    this.rentDate = this.rentService.value ? this.rentService.value.rentDate : this.nowValue;
    this.returnDate = this.rentService.value ? this.rentService.value.returnDate : null;
    console.log(this.rentService.value);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentaldetail';
import { RentalService } from 'src/app/services/rental.service';
import { RentaldetailService } from 'src/app/services/rentaldetail.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  rentaldetails : RentalDetail[]=[];
  dataLoaded =false;

  constructor(private rentalDetailService :RentaldetailService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }
  getRentalDetails(){
    this.rentalDetailService.getRentalDetails().subscribe(response=>{
      this.rentaldetails = response.data
      this.dataLoaded = true
    })
  }

}

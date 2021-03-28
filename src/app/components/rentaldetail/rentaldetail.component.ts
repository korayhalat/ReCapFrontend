import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentaldetail';
import { RentaldetailService } from 'src/app/services/rentaldetail.service';

@Component({
  selector: 'app-rentaldetail',
  templateUrl: './rentaldetail.component.html',
  styleUrls: ['./rentaldetail.component.scss']
})
export class RentaldetailComponent implements OnInit {
  rentaldetails: RentalDetail[]=[];
  dataLoaded=false;

  constructor(private rentalDetailService : RentaldetailService) { }

  ngOnInit(): void {
    this.getRentalDetails;

  }
  getRentalDetails(){
    this.rentalDetailService.getRentalDetails().subscribe(response=>{
      this.rentaldetails=response.data;
      this.rentaldetails.forEach(x=>{
        x.rentDate = new Date(x.rentDate).toLocaleDateString();
      })
      this.dataLoaded=true;
    })
  }
    

}

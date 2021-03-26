import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  
  cardetails : CarDetail[]=[];
  dataLoaded = false;

  constructor(private cardetailService :CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.cardetails=response.data
      this.dataLoaded=true
    })
    }
  }



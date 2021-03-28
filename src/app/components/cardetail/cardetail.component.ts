import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { CarDetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.scss']
})
export class CardetailComponent implements OnInit {

  cardetails: CarDetail[] = [];

  constructor(private carDetailService: CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails() {
    this.carDetailService.getCarDetails().subscribe(responce => {
      this.cardetails = responce.data;
    })
  }

}

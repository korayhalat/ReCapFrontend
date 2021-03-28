import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImages } from 'src/app/models/carimages';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/cardetail.service';
import { CarImagesService } from 'src/app/services/carimages.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  cardetails: CarDetail[]=[];
  brands: Brand[] = [];
  colors: Color[] = [];
  carImage: CarImages[] = [];
  carFilterText = "";
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private carImageService : CarImagesService,
    private carDetailService : CarDetailService,

    ) { }

  ngOnInit(): void {
    this.getCarDetail();
    this.activatedRoute.params.subscribe(params => {
      if (params['brandId']) {
        this.getCarsByBrand(params.brandId);
      } else if (params[('colorId')]) {
        this.getCarsByColor(params.colorId);
      } else {
        this.getCars();
        this.getBrands();
        this.getColors();
        
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }
  getColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }
  getCarsByBrand(brandId: number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.colors=response.data;
    })
  }
  getCarImage(carId :number){
    this.carImageService.getCarImagesById(carId).subscribe(response=>{
      this.carImage=response.data;
    })
  }
  getCarDetailByCarId(carId:number){
    this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carImage=response.data;
    })
  }
  getCarDetail(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.cardetails=response.data;
    })
  }
    
  
  


}
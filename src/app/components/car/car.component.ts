import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICar } from 'src/app/models/car';
import { IRentalDetail } from 'src/app/models/rental-detail';
import { CarService } from 'src/app/services/car.service';
import { RentalDetailService } from 'src/app/services/rental-detail.service';
import { CarOperationComponent } from '../car-operation/car-operation.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars:ICar[]=[];
  carOpt:any[];
  brandOpt:any[]=[];
  colorOpt:any[]=[];
  modelOpt:any[]=[];  
  selectedCar:ICar;

  @Output() carDetail = new EventEmitter<ICar>();

  constructor(private carService:CarService,private rentService: RentalDetailService) { }

  ngOnInit(): void {
    this.carService.getAll().subscribe(res=>{
      this.cars = res.data;
      console.log(this.cars);
      

      this.brandOpt = [ ...new Set(this.cars.map(m=> m.brandText))].map(x=> {return {label:x,value:x}})
      .sort((a,b) => (a.label > b.label) ? 1 : -1);

      this.colorOpt = [ ...new Set(this.cars.map(m=> m.colorText))].map(x=> {return {label:x,value:x}})
      .sort((a,b) => (a.label > b.label) ? 1 : -1);

      this.modelOpt = [ ...new Set(this.cars.map(m=> m.modelYear))].map(x=> {return {label:x,value:x}})
      .sort((a,b) => (a.label > b.label) ? 1 : -1);
      
    })
  }

getCarDetail(e:ICar){
this.carDetail.emit(e);
}

setRent(e:ICar){
  this.rentService.value  = <IRentalDetail>{
    carId : e.id
  };
  this.rentService.activeIndex = 0;
  this.rentService.isNew = true;
  this.rentService.isShow = true;
  
}
}

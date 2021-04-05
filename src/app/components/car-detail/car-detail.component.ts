import { Component, Input, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/car';
import { IRentalDetail } from 'src/app/models/rental-detail';
import { CarImagesService } from 'src/app/services/car-images.service';
import { RentalDetailService } from 'src/app/services/rental-detail.service';
import { environment } from 'src/environments/environment';
import { CarOperationComponent } from '../car-operation/car-operation.component';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  @Input() car : ICar = <ICar>{};
  images:any[];
  apiUrl:string = environment.apiUrl.substr(0,environment.apiUrl.length-4);

  constructor(private imageService:CarImagesService, public rentService: RentalDetailService ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){

    if(this.car){
      this.images=[];
      this.imageService.getImagesByCarId(this.car.id).subscribe(s=>{        
        this.images = s.data;
      } );
    }   
    
  }

  setRent(){
    this.rentService.value  = <IRentalDetail>{
      carId : this.car.id
    };
    this.rentService.activeIndex = 0;
    this.rentService.isNew = true;
    this.rentService.isShow = true;
  }

}

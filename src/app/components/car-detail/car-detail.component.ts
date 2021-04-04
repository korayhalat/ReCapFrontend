import { Component, Input, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/car';
import { CarImagesService } from 'src/app/services/car-images.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  @Input() car : ICar = <ICar>{};
  images:any[];
  apiUrl:string = environment.apiUrl.substr(0,environment.apiUrl.length-4);

  constructor(private imageService:CarImagesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){

    if(this.car){
      this.images=[];
      this.imageService.getImagesByCarId(this.car.id).subscribe(s=>{
        console.log(s);
        this.images = s.data;
      } );
    }
    
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImages } from 'src/app/models/carimages';
import { CarDetailService } from 'src/app/services/cardetail.service';
import { CarImagesService } from 'src/app/services/carimages.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.scss']
})
export class CarimageComponent implements OnInit {

  carImage : CarImages[];
  imagePath = 'http://localhost:61529';
  carDetail :CarDetail;

  constructor(
    private carImageService : CarImagesService,
    private ativadeRoute : ActivatedRoute,
    private carDetailService : CarDetailService
  ) { }

  ngOnInit(): void {
    this.ativadeRoute.params.subscribe(params =>{
      if(params[('carId')]){
        this.getCarsDetail(params[('carId')]);
        this.getCarsImage(params[('carId')])
      }
    })
  }

  getCarsImage(carId:number){
    this.carImageService.getCarImages().subscribe(response =>{
      this.carImage=response.data;
    })
  }
  getImagePath(image:string){
    return this.imagePath + image;
  }
  getCarsDetail(carId:number){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetail = response.data[0]
    })
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICar } from 'src/app/models/car';
import { IFormModule } from 'src/app/models/formModel';
import { IRentalDetail } from 'src/app/models/rental-detail';
import { CarImagesService } from 'src/app/services/car-images.service';
import { RentalDetailService } from 'src/app/services/rental-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  @Input() car : ICar = <ICar>{};
  images:any[]=[];
  apiUrl:string = environment.apiUrl.substr(0,environment.apiUrl.length-4);
  formModel: IFormModule[]=[];
  formGroup: FormGroup;

  constructor(private imageService:CarImagesService, public rentService: RentalDetailService ) { }

  ngOnInit(): void {
  }

  createForm(){
    let c = this.car?this.car:null;

    this.formModel=[
      { name: 'Brand Name', control: 'brandName', type: 'text' },
      { name: 'Color Name', control: 'colorName', type: 'text' },
      { name: 'Daily Price', control: 'dailyPrice', type: 'number' },
      { name: 'Model Year', control: 'modelYear', type: 'text' },
      { name: 'Desciption', control: 'description', type: 'text' },
      { name: 'Retunr Date', control: 'returnDate', type: 'text', hide: c && c.isRented ? false : true }
    ];
    this.formGroup = new FormGroup({
      brandName: new FormControl(c ? c.brandText : ''),
      colorName: new FormControl(c ? c.colorText : ''),
      dailyPrice: new FormControl(c ? c.dailyPrice : ''),
      modelYear: new FormControl(c ? c.modelYear : ''),
      description: new FormControl(c ? c.description : ''),
      returnDate: new FormControl(c ? c.returnDate : '')
    }) ;     
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
      carId : this.car.id,
      rentDate:new Date()
    };
    this.rentService.activeIndex = 0;
    this.rentService.isNew = true;
    this.rentService.isShow = true;
  }

}

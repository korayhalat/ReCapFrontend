import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/car';

@Component({
  selector: 'app-car-operation',
  templateUrl: './car-operation.component.html',
  styleUrls: ['./car-operation.component.scss']
})
export class CarOperationComponent implements OnInit {

  activeIndex:number = 0;
  car:ICar;
  detailHeader:string="";
  
  constructor() { }

  ngOnInit(): void {
  }

  getCarDetail(e:ICar){
    this.car = e;
    if(e){     
      this.tabChange(1);
      this.activeIndex = 1;
    }
  }

  tabChange(e:any){
    this.detailHeader = e == 0 ? "" :"Car Detail";
  }
}

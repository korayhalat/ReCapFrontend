import { Component, OnInit } from '@angular/core';
import { IColor } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  colors:IColor[]=[];
  color:IColor;
  cols:any[];

  colorFilterText = "";

  constructor(private colorService : ColorService) { }

  ngOnInit(): void {
    this.cols = [
      {field: 'colorId',header: 'color Id'},
      {field: 'colorName',header: 'color Name'},
    ];
    this.getColors();
  }
  getColors(){
    this.colorService.getAll().subscribe(response=>{
      this.colors = response.data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBrand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brands : IBrand[]=[];
  cols : any[];
  brandFilterText = " ";
  displayBasic : boolean;
  brandAddForm: FormGroup;

  constructor(
    private brandService : BrandService,
    private formBuilder : FormBuilder,
    public messageService : MessageService
    

  ) { }

  ngOnInit(): void {
    this.getBrands();
    this.createForm();

  }
  createForm(){
    this.brandAddForm=this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }
  add(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.messageService.add({key: 'koray', severity:'success', summary: 'Başlık', detail: 'Mesaj Detayı'});

    }else{
      this.messageService.add({key: 'koray', severity:'error', summary: 'Başlık', detail: 'Mesaj Detayı'});
    }
  }
  showBrandDialog(){
    this.displayBasic=true;
  }
  getBrands(){
    this.brandService.getAll().subscribe(response =>{
      this.brands = response.data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent implements OnInit {

  brandAddForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private brandService : BrandService,
    public messageService : MessageService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName : ["",Validators.required]
    })
  }
  add(){
    if(this.brandAddForm.valid){
      let brandModel=Object.assign({},this.brandAddForm.value);
      this.brandService.addItem(brandModel).subscribe(Response=>{
        this.messageService.add({key: 'koray', severity:'success', summary: 'Araç Ekleme', detail: 'Araç Eklenmiştir'})
      })
    }else{
      this.messageService.add({key: 'koray', severity:'error', summary: 'Araç Ekleme', detail: 'Ekleme Başarısız'})
    }
  }

}

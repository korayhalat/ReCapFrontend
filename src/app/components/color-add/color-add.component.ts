import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.scss']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private colorService : ColorService,
    public messageService : MessageService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.colorAddForm = this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }
  add(){
    if(this.colorAddForm.valid){
    let colorModel = Object.assign({},this.colorAddForm.value);
    this.colorService.addItem(colorModel).subscribe(response=>{
      this.messageService.add({key: 'koray', severity:'success', summary: 'Color', detail: 'Eklendi'});
    })
  } else{
    this.messageService.add({key: 'koray', severity:'error', summary: 'Color', detail: 'Başarısız'});
  }
  }
}

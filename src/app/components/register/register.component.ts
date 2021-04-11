import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm:FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private localStorgeService : LocalstorageService,
    private route : Router,
    public messageService : MessageService


  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  register(){
    if(this.registerForm.valid){
      let registerModel = Object.assign({},this.registerForm.value);
      this.authService.register(registerModel).subscribe(response=>{
        this.messageService.add({key: 'koray', severity:'success', summary: 'Register', detail: 'Başarılı'});
        this.registerForm.reset();
        this.route.navigate(['/login']);
      })
    }else{
      this.messageService.add({key: 'koray', severity:'success', summary: 'Register', detail: 'Başarısız'});
      
    }
  
  }

}

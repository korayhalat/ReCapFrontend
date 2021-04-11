import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IUserUpdate } from 'src/app/models/user-update';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from 'src/app/services/user.service';
import jwtDecode from 'jwt-decode'


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  passwordUpdateForm : FormGroup;
  userUpdateForm: FormGroup;
  user : IUserUpdate;
  userId: number;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    private authService : AuthService,
    private route : Router,
    private localStorage : LocalstorageService,
    private messageService : MessageService

  ) { }

  ngOnInit(): void {
    this.getUserById();
    this.passwordForm();
    this.userForm();

  }
  
  getUserById() {
    let token = this.localStorage.getToken()
    let id: number = Number(Object.values(jwtDecode(token))[0])
    this.userId = id;
    this.userService.getUserById(id).subscribe(response => {
      this.user = response.data;
    })
  }
  passwordForm() {
    this.passwordUpdateForm = this.formBuilder.group({
      email: ["", Validators.required],
      oldPassword: ["", Validators.required],
      newPassword: ["", Validators.required]
    })

  }
  userForm() {
    this.userUpdateForm = this.formBuilder.group({
      userId: [""],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],

    })
  }
  updateUser(){
    if(this.userUpdateForm.valid){
      let userModel = Object.assign({}, this.userUpdateForm.value)
      let token = this.localStorage.getToken();
      let id:number=Number(Object.values(jwtDecode(token))[0])
      userModel.userId =id
      this.userService.update(userModel).subscribe(response=>{
        this.messageService.add({key: 'koray', severity:'success', 
        summary: 'Başlık', detail: 'Başaralı'});
        this.localStorage.removeToken();
        this.route.navigate(["/login"])
      },responseError=> {
        this.messageService.add({key: 'koray', severity:'success', 
        summary: 'Başlık', detail: 'Güncellenmedi'});
      })
    }
    else{
      this.messageService.add({key: 'koray', severity:'danger', 
      summary: 'Başlık', detail: 'Eksik Form'});
    }
  }
  updatePassword(){
    if(this.passwordUpdateForm.valid){
       let updatePassword = Object.assign({},this.passwordUpdateForm.value)
       this.userService.changeUserPassword(updatePassword).subscribe(response=>{        
        this.messageService.add({key: 'koray', severity:'success', 
        summary: 'Başlık', detail: 'Başaralı'}); 
         this.localStorage.removeToken(); 
         this.route.navigate(["/login"])
       },responseError=>{
        this.messageService.add({key: 'koray', severity:'danger', 
        summary: 'Başlık', detail: 'Güncellenmedi'});
       })
    }
    else{
      this.messageService.add({key: 'koray', severity:'success', 
      summary: 'Başlık', detail: 'Eksik Form'});
    }
  }
}

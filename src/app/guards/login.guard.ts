import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class LoginGuard implements CanActivate {
  
    constructor(private authService:AuthService, private router:Router, public messageService: MessageService){}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        if(this.authService.isAuthenticated()){
          return true
        }else{
          this.router.navigate(["login"])
          this.messageService.add({key: 'koray', severity:'success', 
          summary: 'Register', detail: 'Siseteme Giriş Yapınız'});
          return false;
        }
    }
    
  }
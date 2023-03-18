import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  constructor(
    private stgServices: StorageService,
    private router : Router,
  ){
    
  }

  loginValidate(){
    if(this.stgServices.loadInStorage('username') != null){
      return true;
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
  }
  
}

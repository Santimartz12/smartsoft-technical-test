import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private stgServices : StorageService 
  ) {

  }

  loginUser( username: string){
    this.stgServices.saveInStorage('username', username)
  }

  logOutUser(){
    this.stgServices.clearStorage('username');
  }

}

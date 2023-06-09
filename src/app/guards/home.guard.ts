import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard {

  constructor(
    private stgService: StorageService,
    private router: Router,
  ){

  }

  resultsValidate(){
    const isData = this.stgService.loadInStorage('results')
    if(this.stgService.loadInStorage('results') != null && this.stgService.loadInStorage('fileData') != null){
      return true;
    }
    else{
      this.router.navigate(['dashboard'])
      return false;
    }
  }
  
}

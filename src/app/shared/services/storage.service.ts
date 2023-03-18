import { Injectable } from '@angular/core';
import { State } from 'src/app/interfaces/state.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveInStorage(key: string, data: State[] | string) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  loadInStorage(key: string) {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : null;
  }

  clearStorage(key:string){
    localStorage.removeItem(key);
  }

}

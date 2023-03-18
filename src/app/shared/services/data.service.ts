import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as csvtojson from 'csvtojson';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private router: Router
  ) { 
  }

  private _data = [];

  readFile(file: File) {

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async () => {
      const csvData: string = reader.result!.toString();
      const json = await this.csvToJson(csvData);
      this._data = json;
      this.router.navigate(['results']);
    };

  }

  getData(){
    return this._data;
  }

  async csvToJson(csvData: string): Promise<any> {
    return await csvtojson().fromString(csvData);
  }
}

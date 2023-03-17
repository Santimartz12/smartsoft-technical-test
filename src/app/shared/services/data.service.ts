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

  data = [];

  readFile(file: File) {
    
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async () => {
      const csvData: string = reader.result!.toString();
      const json = await this.csvToJson(csvData);
      this.data = json;
      console.log(this.data);
      this.router.navigate(['results']);
    };

  }

  async csvToJson(csvData: string): Promise<any> {
    return await csvtojson().fromString(csvData);
  }
}

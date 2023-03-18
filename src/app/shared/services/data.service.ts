import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as csvtojson from 'csvtojson';
import { State } from 'src/app/interfaces/state.interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private router: Router,
    private stgService: StorageService,
  ) {
  }

  private _data = [];
  private _lastKey = '';
  private _results: State[] = [];
  private _provinceState: String[] = [];
  private _populationCount: number[] = [];
  private _deathsCount: number[] = [];

  readFile(file: File) {

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async () => {
      const csvData: string = reader.result!.toString();
      const json = await this.csvToJson(csvData);
      this._data = json;
      this.processResults();

      //TODO: Join all the data in a single Array (lastKey, fileName, results)
      const fileData = [file.name, this._lastKey];
      
      this.stgService.saveInStorage('fileData', JSON.stringify(fileData));
      this.router.navigate(['results']);
    };

  }

  processResults(): State[] {

    const lastIndex: number = this._data.length - 1;
    const lastKey = Object.keys(this._data[lastIndex])[Object.keys(this._data[lastIndex]).length - 1]

    this._lastKey = lastKey;

    this._data.forEach(st => {

      const nameState = st['Province_State'];
      const deaths = parseInt(st[lastKey]);
      const population = parseInt(st['Population']);

      if (!this._provinceState.includes(nameState)) {
        this._provinceState.push(nameState)
      }

      const index = this._provinceState.indexOf(st['Province_State']);

      if (this._deathsCount[index] == undefined) {
        this._deathsCount[index] = 0;
        this._populationCount[index] = 0;
      }

      this._deathsCount[index] += deaths;
      this._populationCount[index] += population;

    });

    for (let i = 0; i < this._provinceState.length; i++) {

      const state: State = {
        deaths: this._deathsCount[i],
        population: this._populationCount[i],
        name: this._provinceState[i]
      }

      this._results.push(state);

    }

    this.stgService.saveInStorage('results', this._results);
    return this._results;
  }

  async csvToJson(csvData: string): Promise<any> {
    return await csvtojson().fromString(csvData);
  }

  getData() {
    return this._data;
  }

  getResults(): State[] {

    if (this.stgService.loadInStorage('results') != null) {
      return this.stgService.loadInStorage('results');
    } else {
      return this.processResults();
    }
  }

}

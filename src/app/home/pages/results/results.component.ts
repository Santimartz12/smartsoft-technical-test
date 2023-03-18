import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  data = [];
  allInfo = [];
  provinceState: String[] = [];
  populationCount: number[] = [];
  deathsCount: number[] = [];

  constructor(
    private dataServices: DataService,
  ) {

  }

  ngOnInit(): void {

    this.data = this.dataServices.getData();
    const lastIndex: number = this.data.length - 1;
    const lastKey = Object.keys(this.data[lastIndex])[Object.keys(this.data[lastIndex]).length - 1]


    this.data.forEach(el => {

      const nameState = el['Province_State'];
      const deaths = parseInt(el[lastKey]);
      const population = parseInt(el['Population']);

      if (!this.provinceState.includes(nameState)) {
        this.provinceState.push(nameState)
      }

      const index = this.provinceState.indexOf(el['Province_State']);

      if (this.deathsCount[index] == undefined) {
        this.deathsCount[index] = 0;
        this.populationCount[index] = 0;
      }

      this.deathsCount[index] += deaths;
      this.populationCount[index] += population;

    });

    for(let i = 0; i < this.provinceState.length; i++){
      console.log(this.provinceState[i],' : ', this.deathsCount[i] ,' : ', this.populationCount[i])
    }

  }
}
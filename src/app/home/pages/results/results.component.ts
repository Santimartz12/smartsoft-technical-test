import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State } from 'src/app/interfaces/state.interfaces';
import { DataService } from 'src/app/shared/services/data.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  data :State[] = [];
  maxDeathsIndex : number =  0;
  minDeathsIndex : number =  0;
  mostAffectedState : number =  0;

  //TODO: Optimize the data upload
  fileData : string[] = [];


  constructor(
    private dataServices: DataService,
    private stgServices: StorageService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.data = this.dataServices.getResults();
    this.fileData = JSON.parse(this.stgServices.loadInStorage('fileData'));
    this.sortData();
  }

  newFile(){
    this.stgServices.clearStorage('results');
    this.stgServices.clearStorage('fileData');
    this.router.navigate(['dashboard']);
  }

  sortData(){
    this.data.forEach((state, index) => {

      const deaths = state.deaths;
      const population = state.population;


      const maxState = this.data[this.maxDeathsIndex]
      if(deaths > maxState.deaths){
        this.maxDeathsIndex = index;
      }

      const minState = this.data[this.minDeathsIndex]
      if(deaths < minState.deaths){
        this.minDeathsIndex = index;
      }

      const affected = this.data[this.mostAffectedState];
      if((deaths* 100) / population > (affected.deaths * 100) / affected.population){
        this.mostAffectedState = index;
      }
    })
  }

}
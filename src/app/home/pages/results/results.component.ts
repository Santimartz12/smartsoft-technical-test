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


  constructor(
    private dataServices: DataService,
    private stgServices: StorageService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.data = this.dataServices.getResults();
  }

  newFile(){
    this.stgServices.clearStorage('results');
    this.router.navigate(['dashboard']);
  }

}
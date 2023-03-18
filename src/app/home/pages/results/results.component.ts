import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/interfaces/state.interfaces';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  data :State[] = [];


  constructor(
    private dataServices: DataService,
  ) {

  }

  ngOnInit(): void {

    this.data = this.dataServices.getResults();
    console.log(this.data);

  }
}
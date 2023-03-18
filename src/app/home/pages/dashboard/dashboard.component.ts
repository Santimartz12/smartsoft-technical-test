import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  isDrag: boolean = false;
  isError: boolean = false;

  constructor(
    private dataService: DataService,
  ) {}

  dragOver(event: any) {
    event.preventDefault();
    this.isDrag = true;
  }

  dragLeave(event: any) {
    event.preventDefault();
    this.isDrag = false;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.validateFile(file);
  }

  dropFile(event: any) {
    event.preventDefault();
    this.isDrag = false;
    const file = event.dataTransfer.files[0];
    this.validateFile(file);
  }

  validateFile(file: File){
    if (!file.name.endsWith('.csv')) {
      console.error('This is not a .csv file');
      this.isError = true;
      return;
    }

    this.isError = false;
    this.dataService.readFile(file);
  }

}

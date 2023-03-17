import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isDrag: boolean = false;

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
    console.log(file);
  }

  read(event: any) {
    event.preventDefault();
    this.isDrag = false;
    const files = event.dataTransfer.files[0];
    console.log(files);
  }
}

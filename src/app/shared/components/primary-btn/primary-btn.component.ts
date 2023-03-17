import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss']
})
export class PrimaryBtnComponent {

  @Input('text') text = '';
  @Output() onClickFunction: EventEmitter<any> = new EventEmitter();

  executeFunction(){
    this.onClickFunction.emit();
  }

}

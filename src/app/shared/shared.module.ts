import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryBtnComponent } from './components/primary-btn/primary-btn.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    PrimaryBtnComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryBtnComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }

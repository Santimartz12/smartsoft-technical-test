import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ResultsComponent } from './pages/results/results.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgChartsModule,
  ]
})
export class HomeModule { }

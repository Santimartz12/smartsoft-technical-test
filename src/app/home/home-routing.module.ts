import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomeGuard } from '../guards/home.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canMatch: [() => inject(AuthGuard).loginValidate()]
      },
      {
        path: 'results',
        component: ResultsComponent,
        canMatch: [
          () => inject(HomeGuard).resultsValidate(),
          () => inject(AuthGuard).loginValidate()
        ]
      },
      {
        path: '**',
        redirectTo: 'results',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/donut-chart/donut-chart.component').then(m => m.DonutChartComponent)
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personal_data' },
  {
    path: 'access_data',
    title: 'Access Data',
    loadComponent: () =>
      import('./features/form/pages/access-data/access-data.component'),
  },
  {
    path: 'personal_data',
    title: 'Personal Data',
    loadComponent: () =>
      import('./features/form/pages/personal-data/personal-data.component'),
  },
  {
    path: 'login',
    title: 'Log in',
    loadComponent: () => import('./features/form/pages/login/login.component'),
  },
  { path: '**', redirectTo: 'personal_data' },
];

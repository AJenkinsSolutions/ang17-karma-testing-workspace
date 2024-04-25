import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: ()=> import('./test-one/test-one.component').then(a => a.TestOneComponent)
  }
];

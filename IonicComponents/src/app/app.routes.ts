import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button.page').then( m => m.ButtonPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'icon',
    loadComponent: () => import('./icon/icon.page').then( m => m.IconPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./input/input.page').then( m => m.InputPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.page').then( m => m.ListPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.page').then( m => m.AlertPage)
  },
  
];

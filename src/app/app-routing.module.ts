import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { Component } from '@angular/core';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('./product-list/product-list.module')
      .then(mod => mod.ProductListModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./product-detail/product-detail.module')
      .then(mod => mod.ProductDetailModule)
  },
  {
    path: 'car',
    loadChildren: () =>
      import('./product-car/product-car.module')
      .then(mod => mod.ProductCarModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }  
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  enableTracing: false,
  scrollPositionRestoration: 'enabled'
});


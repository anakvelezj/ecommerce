import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCarComponent } from './components/product-car/product-car.component';

const routes: Routes = [
  { path: 'car', component: ProductCarComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCarRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';


const routes: Routes = [
  {
    path: 'orders',
    component: OrderListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    OrderListComponent,
  ]
})
export class OrdersRoutingModule { }

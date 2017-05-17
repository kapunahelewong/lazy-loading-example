import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListComponent } from './order-list/order-list.component';
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderListComponent
  ]
})
export class OrdersModule { }

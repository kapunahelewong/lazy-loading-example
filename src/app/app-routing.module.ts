import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerLookupComponent } from './customer-lookup/customer-lookup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// lazy loaded feature module
import { OrdersRoutingModule } from './orders/orders-routing.module';


const routes: Routes = [
  {
    path: 'customers',
    component: CustomerLookupComponent
  },
  {
    path: 'orders',
    loadChildren: 'orders/orders-routing.module#OrdersRoutingModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full' //have to have pathMatch if you use redirectTo
  },
  // Keep the wildcard route last
  {
    path: '**',
    component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    OrdersRoutingModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

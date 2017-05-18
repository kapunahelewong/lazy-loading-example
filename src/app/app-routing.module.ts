import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerLookupComponent } from './customer-lookup/customer-lookup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { OrdersModule } from './orders/orders.module';


const routes: Routes = [
  {
    path: 'customers',
    component: CustomerLookupComponent
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }

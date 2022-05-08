import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { EmploginComponent } from './component/employee/emplogin/emplogin.component';
import { SampleComponent } from './component/sample/sample/sample.component';
import { OrderComponent } from './component/employee/order/order.component';
import { ProductComponent } from './component/employee/product/product.component';
import { ReceiverComponent } from './component/employee/receiver/receiver.component';
import { DeliveryComponent } from './component/employee/delivery/delivery.component';

import { AproductComponent } from './component/admin/aproduct/aproduct.component';
import { AorderComponent } from './component/admin/aorder/aorder.component';
import { AreceiverComponent } from './component/admin/areceiver/areceiver.component';
import { AcontainerComponent } from './component/admin/acontainer/acontainer.component';
import { AtrackingComponent } from './component/admin/atracking/atracking.component';
import { AemployeeComponent } from './component/admin/aemployee/aemployee.component';
import { AlocationComponent } from './component/admin/alocation/alocation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employeelogin',
    pathMatch: 'full'
  },
  {
    path: 'employeelogin',
    component: EmploginComponent
  },
  {
    path:'adminlogin',
    component: AdminloginComponent
  },
  {
    path:'sample',
    component: SampleComponent
  },
  {
    path:'employee/order',
    component: OrderComponent
  },
  {
    path:'employee/product',
    component: ProductComponent
  },
  {
    path:'employee/receiver',
    component: ReceiverComponent
  },
  {
    path:'admin/order',
    component: AorderComponent
  },
  {
    path:'admin/product',
    component: AproductComponent
  },
  {
    path:'admin/receiver',
    component: AreceiverComponent
  },
  {
    path : 'admin/container',
    component: AcontainerComponent
  },
  {
    path : 'admin/tracking',
    component : AtrackingComponent
  },
  {
    path : 'admin/employee',
    component : AemployeeComponent
  },
  {
    path : 'admin/location',
    component : AlocationComponent
  },
  {
    path : 'employee/delivery',
    component : DeliveryComponent
  },
  {
    path:'**',
    redirectTo: 'employeelogin' 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

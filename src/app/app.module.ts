import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './navbar/admin/admin.component';
import { EmployeeComponent } from './navbar/employee/employee.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { EmploginComponent } from './component/employee/emplogin/emplogin.component';
import { SampleComponent } from './component/sample/sample/sample.component';
import { OrderComponent } from './component/employee/order/order.component';
import { ProductComponent } from './component/employee/product/product.component';
import { ReceiverComponent } from './component/employee/receiver/receiver.component';
import { AproductComponent } from './component/admin/aproduct/aproduct.component';
import { AorderComponent } from './component/admin/aorder/aorder.component';
import { AreceiverComponent } from './component/admin/areceiver/areceiver.component';
import { AcontainerComponent } from './component/admin/acontainer/acontainer.component';
import { AtrackingComponent } from './component/admin/atracking/atracking.component';
import { AemployeeComponent } from './component/admin/aemployee/aemployee.component';
import { AlocationComponent } from './component/admin/alocation/alocation.component';
import { DeliveryComponent } from './component/employee/delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    AdminloginComponent,
    EmploginComponent,
    SampleComponent,
    OrderComponent,
    ProductComponent,
    ReceiverComponent,
    AproductComponent,
    AorderComponent,
    AreceiverComponent,
    AcontainerComponent,
    AtrackingComponent,
    AemployeeComponent,
    AlocationComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVewGm_21PEMHDnq7Ymj88D9Z0rZ4aqzY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

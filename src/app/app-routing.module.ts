import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import {HomeComponent} from './home/home.component';
import {MapComponent} from './map/map.component';
import { SimulationComponent } from './simulation/simulation.component';
import { PaymentComponent } from './payment/payment.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'map', component:  MapComponent},
  { path: 'simulation', component:  SimulationComponent},
  { path: 'payment', component:  PaymentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

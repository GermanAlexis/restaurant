import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';
import { RestaurantsHomeComponent } from './components/restaurants-home/restaurants-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: RestaurantsHomeComponent },
  { path: 'reservation', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

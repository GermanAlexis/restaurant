import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsHomeComponent } from './components/restaurants-home/restaurants-home.component';

const routes: Routes = [
  { path: 'home', component: RestaurantsHomeComponent },
  // { path: '**' , pathMatch: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

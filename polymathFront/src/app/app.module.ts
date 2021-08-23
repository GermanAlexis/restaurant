import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RestaurantModalComponent } from './components/restaurant-modal/restaurant-modal.component';
import { RestaurantsHomeComponent } from './components/restaurants-home/restaurants-home.component';
import { NavbarComponent } from './shared/navbar/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantModalComponent,
    RestaurantsHomeComponent,
    NavbarComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

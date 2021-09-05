import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as moment from 'moment';
import { ReservationService } from 'src/app/services/reservation/reservation.service';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { RestaurantModalComponent } from '../restaurant-modal/restaurant-modal.component';

@Component({
  selector: 'app-restaurants-home',
  templateUrl:'./restaurants-home.component.html', 
  styleUrls: ['./restaurants-home.component.css']
})
export class RestaurantsHomeComponent implements OnInit {
  restaurants: any[] = []
  resercount: number = 0
  minDate: Date = new Date
  date2: Date = new Date
  constructor(public dialog: MatDialog,
              private serviceRestaurant: RestaurantService,
              private serviceReservation: ReservationService
) { }

  ngOnInit(): void {
    this.getallRestaurant()
  }

  getallRestaurant(){
    this.serviceRestaurant.getAllRestaurant().subscribe((resp: any) => {
      this.restaurants = resp.restaurants
    })
  }

  getAction(action: string, id: string){
    switch(action){
      case 'delete':
        this.serviceRestaurant.delete(id).subscribe((resp: any) => {
          console.log(resp)
          if(resp.ok){ this.getallRestaurant() }
        })
        break
        case 'edit':
          const dialogRef = new MatDialogConfig()
          dialogRef.autoFocus = true;
          dialogRef.width = '50%'
          dialogRef.disableClose = false;
          dialogRef.data = {
            id: id
          }
          const refEdit = this.dialog.open(RestaurantModalComponent, dialogRef);
          refEdit.afterClosed().subscribe((resp) => {
            if(resp) {this.getallRestaurant()}
          })
      break
    }
  }

  createReservation(id: string){
    if(moment(this.date2).isAfter(moment())){
      this.serviceReservation.createReservation(id, this.date2).subscribe((resp: any) => {
        if(resp) {  
          this.minDate = new Date
          this.resercount = resp.resercount }
      })
    } else {
      console.log('error')
    } 

  }
}

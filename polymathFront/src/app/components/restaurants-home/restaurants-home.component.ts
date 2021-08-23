import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { RestaurantModalComponent } from '../restaurant-modal/restaurant-modal.component';

@Component({
  selector: 'app-restaurants-home',
  templateUrl:'./restaurants-home.component.html', 
  styleUrls: ['./restaurants-home.component.css']
})
export class RestaurantsHomeComponent implements OnInit {
  restaurants: any[] = []
  constructor(public dialog: MatDialog,
              private serviceRestaurant: RestaurantService
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
      case 'reservert':
      break
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RestaurantModalComponent } from 'src/app/components/restaurant-modal/restaurant-modal.component';
import { RestaurantsHomeComponent } from 'src/app/components/restaurants-home/restaurants-home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id: string= ''
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }
  openmodalrestaurant() {
    const dialogRef = new MatDialogConfig()
    dialogRef.disableClose = false;
    dialogRef.autoFocus = true;
    dialogRef.width = '50%';
    dialogRef.data = { 
      id: this.id 
    }
    const refEdit = this.dialog.open(RestaurantModalComponent, dialogRef);
    refEdit.afterClosed().subscribe((resp) => {
      if(resp) { window.location.reload() }
    })
    
  }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html', 
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'description', 'reservations', 'total_reservation'];
  reservation = new MatTableDataSource();

  

  constructor( private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getallreservation()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.reservation.filter = filterValue.trim().toLowerCase();
  }

  getallreservation(){
    this.reservationService.getallreservation().subscribe((resp: any) => {
      this.reservation = resp.reservations
    })
  }
}

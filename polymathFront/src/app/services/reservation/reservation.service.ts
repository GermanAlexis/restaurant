import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getallreservation(){
    return this.http.get(`${base_url}/reservation`)
  }

  createReservation(id: string, date_reservation: Date){
    let date = {date_reservation: date_reservation}
    return this.http.post(`${base_url}/reservation/${id}`, date)
  }
}

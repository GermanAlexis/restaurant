import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
 

  constructor(private http: HttpClient) { }
  getAllRestaurant() {
    return this.http.get(`${base_url}/restaurant`)
  }

  getrestaurantById(id: string){
    return this.http.get(`${base_url}/restaurant/${id}`)
  }

  createRestaurant(formDta: any){
    return this.http.post(`${base_url}/restaurant`, formDta)
  }
  updateRestaurant(id: string, formDta: any){
    console.log(formDta)
    return this.http.put(`${base_url}/restaurant/${id}`, formDta)
  }
  delete(id: string) {
   return this.http.delete(`${base_url}/restaurant/${id}`)
  }
}

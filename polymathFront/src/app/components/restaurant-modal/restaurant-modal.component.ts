import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { RestaurantsHomeComponent } from '../restaurants-home/restaurants-home.component';

@Component({
  selector: 'app-restaurant-modal',
  templateUrl: './restaurant-modal.component.html',
  styleUrls: ['./restaurant-modal.component.css']
})
export class RestaurantModalComponent implements OnInit {

  id: any
  url_img: string = ''
  formData!: FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private serviceRestaurant: RestaurantService,
              public dialogRef: MatDialogRef<RestaurantsHomeComponent>){this.id = data.id }

  ngOnInit() {
    this.id == '' ? '' : this.getRestaurantById()
    this.formData = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  getRestaurantById() {
    this.serviceRestaurant.getrestaurantById(this.id).subscribe( (respGetid: any ) => {
      console.log(respGetid)
      this.formData.controls['name'].setValue(respGetid.restaurant.name)
      this.formData.controls['city'].setValue(respGetid.restaurant.city)
      this.formData.controls['address'].setValue(respGetid.restaurant.address)
      this.formData.controls['description'].setValue(respGetid.restaurant.description)
      this.url_img = respGetid.restaurant.url_img
    })
  }

  infoRestaurant(){
    if(this.id == ''){
      this.serviceRestaurant.createRestaurant(this.formData.value).subscribe((resp: any) => {
    
      })
    } else {
      this.serviceRestaurant.updateRestaurant(this.id, this.formData.value).subscribe((resp: any) => {})
    }

  }

}


import { Component,ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { NgForm } from '@angular/forms';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  styles: [`
  agm-map {
    height: 300px;
  }
`],
})
export class ContactusComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private auth: AuthenticationService
  ) {}
  
   
feedback;
submit(form: NgForm) {
 
  this.feedback = {
    
    firstname: form.value.firstname,
    lastname: form.value.lastname,
    areaCode: form.value.areaCode,
    tel: form.value.tel,
    email: form.value.email,
    fb: form.value.userFeedback,
    contactback:form.value.contactback
  }
  console.log(this.feedback);
  // let message = "Added!";
  // let action = "Done";
  // this.snackBar.open(message, action, {
  //   duration: 2000,
  // });
  this.auth.sendFeedback(this.feedback)
  .subscribe(response => {
    let status = response.status;
    //alert(`the response is : ${response.body.name}`);
    alert("Added Successfully");
   
  }, error => {
    alert(`Error is : ${error.error.message}`);
    console.log(error);
  })
}
  ngOnInit() {
    //set google maps defaults
    this.zoom = 18;
    this.latitude = 30.515081014922806;
    this.longitude = 76.65970371045069;

    //create search FormControl

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
   
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { Booking } from '../domain/booking';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  booking: Booking;
  myForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, 
              private bookingService: BookingService,private formbuild: FormBuilder) { 

    this.booking = new Booking();
    this.reactiveForm();

  }

  ngOnInit() {

  }

  public onSubmit(){

    this.bookingService.save(this.booking).subscribe(result => this.goToBookingList(), error => console.log(error));

  }

  public goToBookingList(){

    this.router.navigate(['/bookinglist']);

  }

  reactiveForm() {

    this.myForm = this.formbuild.group({
      name: ['', Validators.required ]
   });
  
  }

 /* createForm(){

    this.angForm = this.fb.group({booking: ['', Validators.required]});

  }*/

}

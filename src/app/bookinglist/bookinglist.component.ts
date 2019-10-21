import { Component, OnInit } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { Booking } from '../domain/booking';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.scss']
})
export class BookinglistComponent implements OnInit {

  booking: Booking;
  bookings: Booking[];

  constructor(private bookingService: BookingService, 
    private route: ActivatedRoute, 
    private router: Router) {this.booking = new Booking(); }

 

  ngOnInit() {

    //this.bookingService.myMethod();
    this.bookingService.getBookings().subscribe(data => {

      this.bookings = data 
      console.log(this.bookings); 
      this.router.navigate(['/bookings']);

    }
    
    );

  }

}

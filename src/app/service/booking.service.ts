import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../domain/booking';
import { Observable } from 'rxjs';

@Injectable()

export class BookingService {

  private getBooking: string;
  private saveBooking: string;

  constructor(private bookingHttp: HttpClient) { 

    //setting the url for booking getAll in my API
    this.getBooking = 'http://localhost:8080/booking/getAll';
    this.saveBooking = 'http://localhost:8080/booking/new';
  
  }

  public getBookings(): Observable<Booking[]>{


    return this.bookingHttp.get<Booking[]>(this.getBooking);

  }

  public save(booking: Booking){

     return this.bookingHttp.post<Booking>(this.saveBooking, booking);

  }


}

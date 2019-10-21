import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

//Form components
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MechanicFormComponent } from './mechanic-form/mechanic-form.component';
import { HomeComponent } from './home/home.component';

//list components
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { UpdateMechanicComponent } from './update-mechanic/update-mechanic.component';
import { MechanicDetailsComponent } from './mechanic-details/mechanic-details.component';

//services
import { BookingService } from './service/booking.service';
import { MechanicService } from './service/mechanic.service';

@NgModule({

  declarations: [

    AppComponent,
    HomeComponent,
    BookinglistComponent,
    BookingFormComponent,
    MechanicListComponent,
    MechanicFormComponent,
    UpdateMechanicComponent,
    MechanicDetailsComponent
  
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],

  providers: [BookingService, MechanicService],
  bootstrap: [AppComponent]

})

export class AppModule { }

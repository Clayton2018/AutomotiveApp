import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//add routes to components
import { HomeComponent } from './home/home.component'; 
import { BookinglistComponent } from './bookinglist/bookinglist.component'; 
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component'; 
import { MechanicFormComponent } from './mechanic-form/mechanic-form.component';
import { MechanicDetailsComponent } from './mechanic-details/mechanic-details.component';
import { UpdateMechanicComponent } from './update-mechanic/update-mechanic.component';


//add routes to pages
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'bookinglist', component: BookinglistComponent},
  {path: 'addBooking', component: BookingFormComponent},
  {path: 'mechanicList', component: MechanicListComponent},
  {path: 'addMechanic', component: MechanicFormComponent},
  { path: 'update/:id', component: UpdateMechanicComponent },
  { path: 'details/:id', component: MechanicDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

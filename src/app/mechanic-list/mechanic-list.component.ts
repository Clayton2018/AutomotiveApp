import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mechanic } from '../domain/mechanic';
import { MechanicService } from '../service/mechanic.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.scss']
})
export class MechanicListComponent implements OnInit {

  mechanic: Mechanic;
  mechanics: Observable<Mechanic[]>;

  constructor(private mechanicService: MechanicService, 
              private route: ActivatedRoute, 
              private router: Router) { 

                //this.mechanic = new Mechanic();


              }

  ngOnInit() {

    /*//this.bookingService.myMethod();
    this.mechanicService.getMechanics().subscribe(data => {

      this.mechanics = data 
      console.log(this.mechanics); 
      this.router.navigate(['/mechanics']);
      

    }
    
    );*/
    this.reloadList();


  }

  reloadList(){

    this.mechanics = this.mechanicService.getMechanics();

  }

  deleteMechanic(id: string) {

    this.mechanicService.delete(id).subscribe(
      data => {console.log(data);
      this.reloadList();
    }, error => console.log(error));


  }

  mechanicDetails(id: string){

    this.router.navigate(['details', id]);
  }

  updateMechanic(id: string){
    this.router.navigate(['update', id]);
  }

}

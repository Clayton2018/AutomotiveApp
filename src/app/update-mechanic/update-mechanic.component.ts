import { Component, OnInit } from '@angular/core';
import { Mechanic } from '../domain/mechanic';
import { MechanicService } from '../service/mechanic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-mechanic',
  templateUrl: './update-mechanic.component.html',
  styleUrls: ['./update-mechanic.component.scss']
})
export class UpdateMechanicComponent implements OnInit {

  id: string;
  mechanic: Mechanic;

  constructor(private route: ActivatedRoute,private router: Router,
              private mechanicService: MechanicService) { }

  ngOnInit() {

    this.mechanic = new Mechanic();

    this.id = this.route.snapshot.params['id'];

    this.mechanicService.findMech(this.id).subscribe(data => {console.log(data); 
    this.mechanic = data;
    }, error => console.log(error));
  
  }

  updateMechanic(){

    this.mechanicService.updateMech(this.id, this.mechanic)
    .subscribe(data => console.log(data), error => console.log(error));
    this.mechanic = new Mechanic();
    this.goToList();

  }

  onSubmit(){

    this.updateMechanic();

  }

  goToList(){

    this.router.navigate(['/mechanic'])

  }

}

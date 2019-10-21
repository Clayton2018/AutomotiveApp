import { Component, OnInit } from '@angular/core';
import { Mechanic } from '../domain/mechanic';
import { MechanicService } from '../service/mechanic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mechanic-details',
  templateUrl: './mechanic-details.component.html',
  styleUrls: ['./mechanic-details.component.scss']
})
export class MechanicDetailsComponent implements OnInit {


  name: string;
  mechanic: Mechanic;

  constructor(private route: ActivatedRoute,private router: Router,
              private mechanicService: MechanicService) { }

  ngOnInit() {

    this.mechanic = new Mechanic();
    this.name = this.route.snapshot.params['name'];

    this.mechanicService.findMech(this.name)
      .subscribe(data => {
        console.log(data)
        this.mechanic = data;
      }, error => console.log(error));

  }

  list(){
    this.router.navigate(['mechanicList']);
  }

}

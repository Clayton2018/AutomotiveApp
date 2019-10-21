import { Component, OnInit } from '@angular/core';
import { Mechanic } from '../domain/mechanic';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MechanicService } from '../service/mechanic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mechanic-form',
  templateUrl: './mechanic-form.component.html',
  styleUrls: ['./mechanic-form.component.scss']
})
export class MechanicFormComponent implements OnInit {

  mechanic: Mechanic;
  myForm: FormGroup;

  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, 
              private mechanicService: MechanicService, private formbuild: FormBuilder) {

                this.mechanic = new Mechanic();
                this.reactiveForm();
                

               }


  ngOnInit() {
  }

  newMechanic() :void{

    this.submitted = false;
    this.mechanic = new Mechanic();

  }


  public onSubmit(){

    this.submitted = true;
    this.mechanicService.save(this.mechanic).subscribe(result => this.goToMechanicList(), error => console.log(error));

  }

  public goToMechanicList(){

    this.router.navigate(['/mechanicList']);

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

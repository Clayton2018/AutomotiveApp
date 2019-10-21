import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mechanic } from '../domain/mechanic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  private getMechanic: string;
  private saveMechanic: string;
  private updateMechanic: string;
  private findMechanic: string;
  private deleteMechanic: string;

  private id: string;



  constructor(private http: HttpClient) {

     //setting the url for booking getAll in my API
     this.getMechanic = 'http://localhost:8080/mechanic/getAll';
     this.saveMechanic = 'http://localhost:8080/mechanic/new';
     this.updateMechanic = 'http://localhost:8080/mechanic/update';
     this.findMechanic = 'http://localhost:8080/mechanic/find/{id}';
     this.deleteMechanic = 'http://localhost:8080/mechanic/delete';
   
   }

   public getMechanics(): Observable<Mechanic[]>{


    let username= 'mechanic';
    let password= 'mechanic';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});


    return this.http.get<Mechanic[]>(this.getMechanic, {headers});

  }

  public findMech(id:string): Observable<Mechanic>{


    let username= 'mechanic';
    let password= 'mechanic';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});


    return this.http.get<Mechanic>(this.findMechanic, {headers});

  }

  public save(mechanic: Mechanic){

    let username= 'mechanic';
    let password= 'mechanic';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});

     return this.http.post<Mechanic>(this.saveMechanic, mechanic, {headers});

  }

  public updateMech(id: string, value:any): Observable<Mechanic>{

    let username= 'mechanic';
    let password= 'mechanic';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});

     return this.http.put<Mechanic>(this.updateMechanic, value, {headers});

  }

  public delete(id: String): Observable<any>{

    return this.http.delete<Mechanic>(this.deleteMechanic + id);

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }


}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  petsUrl: string = 'assets/pets/pets.json';

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }
}

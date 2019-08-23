import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  petsUrl = 'assets/pets/pets.json';

  url = ''; // Will be the url where the data will post
  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  getPetSearch(pet: Pet) {
    return this.http.post<any>(this.url, pet);
  }
}

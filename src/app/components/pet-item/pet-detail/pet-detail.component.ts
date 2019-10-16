import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

import { Pet } from '../../../models/Pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})

// TODO: 10/15/2019 Finish getting matching 'id' from pet-item selected to display that pets data

export class PetDetailComponent implements OnInit {

  @Input() pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) { }

  ngOnInit() {
    // let id = +this.route.snapshot.paramMap.get('id');
    //
    // this.pet = this.petService.getPet(id);
  }

  // getPet(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.petService.getPet(id)
  //     .subscribe(pet => this.pet = pet);
  // }

}

 //   this.pet = this.route.paramMap.pipe(
 //     switchMap((params: ParamMap) =>
 //       this.service.getPets(params.get('id')))
 //   );

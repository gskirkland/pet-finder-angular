import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { PetService } from '../../services/pet.service';

import { Pet } from 'src/app/models/Pet';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss']
})
export class PetItemComponent implements OnInit {
  @Input() pet: Pet;
  @Input() checkedPetStatus;
  pets: any[] = [];
  petStatusChecked = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.checkedPetStatus);

    this.filterChecked();

  }

  filterChecked() {
    Object.keys(this.checkedPetStatus).forEach(key => {
      if (this.checkedPetStatus[key] === this.pet.petStatus[0].id) {
        this.petStatusChecked.push(this.pet);
        console.log(this.petStatusChecked);
      }
    });
  }

  // ToDo: 10/14/2019 Show 'No Results Found' message if no results(lost,female,other has no results)

}

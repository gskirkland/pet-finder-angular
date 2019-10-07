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
  @Input() selectedPetStatus;
  // @Input() groupFilters: any; // ToDo: 9/20/2019 Fix 'type'
  // @Input() searchByKeyword: string;
  pets: any[] = [];
  petStatusChecked: any = [];
  // filteredPets: any[] = [];
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getPetSearch(this.pet);
    console.log(this.selectedPetStatus);

    this.petStatusChecked = this.filterChecked();

    console.log(this.petStatusChecked);
  }

  filterChecked() {
    if (this.pet.petStatus.length > 0 && this.selectedPetStatus[0] === 100) {
      return this.petStatusChecked = this.pet.petStatus
        .filter((pet, index: 0) => this.pet.petStatus[0].id !== null);
    } if (this.pet.petStatus.length > 0 && this.selectedPetStatus[0] === 200) {
      return this.petStatusChecked = this.pet.petStatus
        .filter((pet, index: 1) => this.pet.petStatus[1].id !== null);
    } else {
      return this.petStatusChecked = this.pet.petStatus
        .filter((pet, index: 2) => this.pet.petStatus[2].id !== null);
    }
  }
  //  ngOnChanges(): void {
  //    if (this.groupFilters) {
  //      this.filterPetList(this.groupFilters, this.pets);
  //    }
  //  }
  //  filterPetList(filters: any, pets: any): void {
  //    this.filteredPets = this.pets;
  //  }
}

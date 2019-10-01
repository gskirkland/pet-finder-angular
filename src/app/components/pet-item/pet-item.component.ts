import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { PetService } from '../../services/pet.service';

import { Pet } from 'src/app/models/Pet';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss']
})
export class PetItemComponent implements OnInit/*, OnChanges*/ {
  @Input() pet: Pet;
  // @Input() groupFilters: any; // ToDo: 9/20/2019 Fix 'type'
  // @Input() searchByKeyword: string;
  pets: any[] = [];
  // filteredPets: any[] = [];
  constructor(private petService: PetService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.petService.getPetSearch(this.pet);
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

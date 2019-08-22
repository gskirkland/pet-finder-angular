import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';

import { Pet } from '../../models/Pet';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.scss']
})
export class PetSearchComponent implements OnInit {
  pets: Pet[];

  // petType select box array
  petTypes = ['Cat', 'Dog', 'Other'];

  // searchDistance select box array
  searchDistances = ['25', '50', '100'];

  // dateRange select box array
  dateRanges = ['Last 3 Days', 'Last Week', 'Last 2 Weeks', 'Last Month', 'Any Time'];

  // sortBy select box array
  sortBySelections = ['Most Recent', 'Distance'];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }
}

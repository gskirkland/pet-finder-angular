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
  petTypes = ['All Species', 'Cat', 'Dog', 'Other']; // Fix default selected value to appear when page is loaded

  // searchDistance select box array
  searchDistances = ['10 miles', '25 miles', '50 miles', '100 miles']; // Fix default selected value to appear when page is loaded

  // dateRange select box array
  dateRanges = [
    'Last Day',
    'Last 3 Days',
    'Last Week',
    'Last 2 Weeks',
    'Last Month',
    'Any Time'
  ]; // Fix default selected value to appear when page is loaded

  // sortBy select box array
  sortBySelections = ['Most Recent', 'Distance']; // Fix default selected value to appear when page is loaded

  // new Pet property
  petSearch = new Pet(
    null,
    this.petTypes[0],
    'Cleveland, TN 37312',
    this.searchDistances[0],
    false,
    false,
    false,
    '',
    this.dateRanges[0],
    this.sortBySelections[0]
  );

  constructor(private petService: PetService) { }

  // onSubmit() {
  // this.petService.getPetSearch(this.petSearch)
  // .subscribe(
  // data => console.log('Success!', data),
  // error => console.log('Error!', error)
  // );
  // }

  onSubmit() {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }
  ngOnInit() { } // Remove after setting up petService url to post data
}

  // ngOnInit() {
    // this.petService.getPets().subscribe(pets => {
      // this.pets = pets;
    // });
  // }
// }

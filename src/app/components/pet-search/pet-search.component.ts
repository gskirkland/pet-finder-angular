import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Pet } from '../../models/Pet';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.scss']
})
export class PetSearchComponent implements OnInit {
  // petType values array for select box
  petTypes: any = ['All Species', 'Cat', 'Dog', 'Other'];
  // searchDistance values array for select box
  searchDistances: any = ['10 miles', '25 miles', '50 miles', '100 miles'];
  // dateRange values array for select box
  dateRanges: any = [
    'Last Day',
    'Last 3 Days',
    'Last Week',
    'Last 2 Weeks',
    'Last Month',
    'Any Time'
  ];
  // sortBy select box array
  sortBySelections: any = ['Most Recent', 'Distance'];
  // inital value for submit button
  submitted = false;
  // inital value for errorMsg
  errorMsg = '';
  // pet array for displaying search results
  pets: Pet[];


  // Inject an instance of FormBuilder service and PetService
  constructor(private fb: FormBuilder, private petService: PetService) { }

  // Create a new FormGroup with the FormBuilder Service
  searchForm = this.fb.group({
    // value is an array first index is the default value, second index is an array of multiple validators
    petId: [''],
    petType: [this.petTypes[0]],
    location: [''],
    searchDistance: [this.searchDistances[0]],
    lostCheck: [true],
    foundStrayCheck: [true],
    reunitedCheck: [false],
    petGender: [''],
    dateRange: [this.dateRanges[0]],
    sortBy: [this.sortBySelections[0]]
  });

  // Select box setValue on change methods
  // petType value
  changePetType(e) {
    this.searchForm.get('petType').setValue(e.target.value, {
      onlySelf: true
    });
  }
  // searchDistance value
  changeSearchDistance(e) {
    this.searchForm.get('searchDistance').setValue(e.target.value, {
      onlySelf: true
    });
  }
  // dateRange value
  changeDateRange(e) {
    this.searchForm.get('dateRange').setValue(e.target.value, {
      onlySelf: true
    });
  }
  // sortBy value
  changeSortBy(e) {
    this.searchForm.get('sortBy').setValue(e.target.value, {
      onlySelf: true
    });
  }

  // get search form values on submit method
  onSubmit() {
    this.submitted = true;
    this.petService.getPetSearch(this.searchForm.value).subscribe(
      data => console.log('Success!', data),
      error => this.errorMsg = error.statusText
    );

    // get pet-items from local json file
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }

  ngOnInit() { }
}

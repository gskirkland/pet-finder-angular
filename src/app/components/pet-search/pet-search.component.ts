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

  // Create a new FormGroup with the FormBuilder Service
  searchForm = this.fb.group({
    petId: [''],
    petType: [''],
    location: [''],
    searchDistance: [''],
    lostCheck: [''],
    foundStrayCheck: [''],
    petGender: [''],
    dateRange: [''],
    sortBy: ['']
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

}


/* BELOW WILL WORK WITH TEMPLATE DRIVE FORM. WILL BE COMMENTED OUT WHILE REACTIVE FORM IS BEING MADE 8/25/2019
export class PetSearchComponent implements OnInit {
  pets: Pet[];
  submitted = false;
  errorMsg = '';

  /* BELOW WILL WORK WITH TEMPLATE DRIVE FORM. WILL BE COMMENTED OUT WHILE REACTIVE FORM IS BEING MADE 8/25/2019
    // petType select box array
    petTypes = ['All Species', 'Cat', 'Dog', 'Other'];
  
    // searchDistance select box array
    searchDistances = ['10 miles', '25 miles', '50 miles', '100 miles'];
  
    // dateRange select box array
    dateRanges = [
      'Last Day',
      'Last 3 Days',
      'Last Week',
      'Last 2 Weeks',
      'Last Month',
      'Any Time'
    ];
  
    // sortBy select box array
    sortBySelections = ['Most Recent', 'Distance'];
  
    // new Pet property
    petSearch = new Pet(
      '',
      this.petTypes[0],
      '',
      this.searchDistances[0],
      true,
      true,
      false,
      '',
      this.dateRanges[0],
      this.sortBySelections[0]
    );
  
    constructor(private petService: PetService) { }
  
    onSubmit() {
      this.submitted = true;
      this.petService.getPetSearch(this.petSearch)
        .subscribe(
          data => console.log('Success!', data),
          error => this.errorMsg = error.statusText
        );
    }
  
    ngOnInit() {
      this.petService.getPets().subscribe(pets => {
        this.pets = pets;
      });
    }
  }
  */

  // Below adds petSearch data to DOM using data stored in local json file
  // onSubmit() {
  // this.petService.getPets().subscribe(pets => {
  // this.pets = pets;
  // });
  // }
  // ngOnInit() { } // Remove after setting up petService url to post data
  // }

}

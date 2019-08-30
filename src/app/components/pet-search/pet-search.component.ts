// COMPONENTS
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
// MODELS
import { Pet } from '../../models/Pet';
// SERVICES
import { PetService } from '../../services/pet.service';
// CUSTOM VALIDATOR
import { requireCheckBoxesToBeCheckedValidator } from '../../validators/custom.validators';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.scss']
})
export class PetSearchComponent implements OnInit {
  // petType SELECT VALUES
  petTypes: any = ['All Species', 'Cat', 'Dog', 'Other'];
  // searchDistance SELECT VALUES
  searchDistances: any = ['10 miles', '25 miles', '50 miles', '100 miles'];
  // dateRange SELECT VALUES
  dateRanges: any = [
    'Last Day',
    'Last 3 Days',
    'Last Week',
    'Last 2 Weeks',
    'Last Month',
    'Any Time'
  ];
  // sortBy SELECT VALUES
  sortBySelections: any = ['Most Recent', 'Distance'];
  // DEFAULT VALUE OF SUBMIT EVENT
  submitted = false;
  // INIT ERRORMSG
  errorMsg = '';
  // INIT PET LIST
  pets: Pet[];

  // INJECT INSTANCE OF PETSERVICE
  constructor(private petService: PetService) { }

  searchForm = new FormGroup({
    petId: new FormControl('', [Validators.required]),
    petType: new FormControl(this.petTypes[0]),
    location: new FormControl(''),
    searchDistance: new FormControl(this.searchDistances[0], [Validators.required]),
    petStatus: new FormGroup({
      lostCheck: new FormControl(true),
      foundStrayCheck: new FormControl(true),
      reunitedCheck: new FormControl(false),
    }, requireCheckBoxesToBeCheckedValidator()),
    petGender: new FormControl('male'),
    dateRange: new FormControl(this.dateRanges[0], [Validators.required]),
    sortBy: new FormControl(this.sortBySelections[0], [Validators.required]),
  });

  // GET SEARCH FORM VALUES
  // onSubmit() {
  //   this.submitted = true;
  //   this.petService.getPetSearch(this.searchForm.value).subscribe(
  //     data => console.log('Success!', data),
  //     error => this.errorMsg = error.statusText
  //   );
  //
  //   // GET PET-ITEMS FROM JSON FILE
  //   this.petService.getPets().subscribe(pets => {
  //     this.pets = pets;
  //   });
  // }

  // CHANGE petType VALUE
  changePetType(e) {
    this.searchForm.get('petType').setValue(e.target.value, {
      onlySelf: true
    });
  }
  // CHANGE searchDistance VALUE
  changeSearchDistance(e) {
    this.searchForm.get('searchDistance').setValue(e.target.value, {
      onlySelf: true
    });
  }
  // CHANGE dateRange VALUE
  changeDateRange(e) {
    this.searchForm.get('dateRange').setValue(e.target.value, {
      onlySelf: true
    });
  }
  // CHANGE sortBy VALUE
  changeSortBy(e) {
    this.searchForm.get('sortBy').setValue(e.target.value, {
      onlySelf: true
    });
  }

  // GET FORMCONTROLS
  get petId() {
    return this.searchForm.get('petId');
  }

  get petType() {
    return this.searchForm.get('petType');
  }

  get location() {
    return this.searchForm.get('location');
  }

  get searchDistance() {
    return this.searchForm.get('searchDistance');
  }

  get lostCheck() {
    return this.searchForm.get('petStatus.lostCheck');
  }

  get foundStrayCheck() {
    return this.searchForm.get('petStatus.foundStrayCheck');
  }

  get reunitedCheck() {
    return this.searchForm.get('petStatus.reunitedCheck');
  }

  get petGender() {
    return this.searchForm.get('petGender');
  }

  get dateRange() {
    return this.searchForm.get('dateRange');
  }

  get sortBy() {
    return this.searchForm.get('sortBy');
  }

  // TEMPORARY SUBMIT METHOD, SHOWS HARDCODED SEARCH RESULTS
  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;

    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }

  ngOnInit() { }
}

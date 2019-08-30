// COMPONENTS
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  // INJECT INSTANCE OF FORMBUILDER AND PETSERVICE
  constructor(private fb: FormBuilder, private petService: PetService) { }

  searchForm = this.fb.group({
    petId: [null],
    petType: [this.petTypes[0]],
    location: [null],
    searchDistance: [this.searchDistances[0], [Validators.required]],
    petStatus: this.fb.group({
      lostCheck: [true, [requireCheckBoxesToBeCheckedValidator]],
      foundStrayCheck: [true, [requireCheckBoxesToBeCheckedValidator]],
      reunitedCheck: [false, [requireCheckBoxesToBeCheckedValidator]]
    }),
    petGender: ['male'],
    dateRange: [this.dateRanges[0], [Validators.required]],
    sortBy: [this.sortBySelections[0], [Validators.required]],
  });

  getPetStatusGroup() {
    const lostCheck = this.searchForm.get('petStatus.lostCheck');
    const foundStrayCheck = this.searchForm.get('petStatus.foundStrayCheck');
    const reunitedCheck = this.searchForm.get('petStaths.reunitedCheck');
  }

  // TEMPORARY SUBMIT METHOD, SHOWS HARDCODED SEARCH RESULTS
  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;

    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }

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

  ngOnInit() { }
}

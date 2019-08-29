// COMPONENTS
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
// MODELS
import { Pet } from '../../models/Pet';
// SERVICES
import { PetService } from '../../services/pet.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

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

  // Create a new FormGroup with the FormBuilder Service
  // searchForm = this.fb.group({
  // value is an array first index is the default value, second index is an array of multiple validators
  //   petId: ['', [Validators.required]],
  //   petType: [this.petTypes[0]],
  //   location: ['Chattanooga, TN'],
  //   searchDistance: [this.searchDistances[0]],
  //   petStatus: this.fb.group({
  //     lostCheck: [false],
  //     foundStrayCheck: [false],
  //     reunitedCheck: [false]
  //   }),
  //   petGender: ['male'],
  //   dateRange: [this.dateRanges[0]],
  //   sortBy: [this.sortBySelections[0]]
  // });

  // Create FormGroup
  searchForm: FormGroup;

  // Get FormBuild Array Checkbox Values
  get petStatusCheck() {
    return this.searchForm.get('petStatus') as FormArray;
  }
  // Get petStatus CheckBox Values
  onCheckedChanged(e) {
  }
  // Inject an instance of FormBuilder service and PetService
  constructor(private fb: FormBuilder, private petService: PetService) { }

  ngOnInit() {
    //  this.setPetStatusValidators();
    this.searchForm = this.fb.group({
      // value is an array first index is the default value, second index is an array of multiple validators
      petId: [null, [Validators.required]],
      petType: [this.petTypes[0], [Validators.required]],
      location: [null, [Validators.required]],
      searchDistance: [this.searchDistances[0], [Validators.required]],
      petGender: ['male'],
      dateRange: [this.dateRanges[0], [Validators.required]],
      sortBy: [this.sortBySelections[0], [Validators.required]],
      petStatus: this.fb.group({
        lostCheck: [false],
        foundStrayCheck: [false],
        reunitedCheck: [false]
      })
    });
  }
  // Set petStatus ChkBox Validators
  // function setPetStatusValidators() {
  // Assign checkbox controls to local variables
  //  const lostCheck = this.searchForm.get('lostCheck');
  //  const foundStrayCheck = this.searchForm.get('foundStrayCheck');
  //  const reunitedCheck = this.searchForm.get('reunitedCheck');
  //  }

  //  this.searchForm.get('lostCheck').valueChanges
  //    .subscribe(lostCheck => {
  //      if (!lostCheck) {
  //        lostCheckControl.setValidators(null);
  //        foundStrayCheckControl.setValidators(null);
  //        reunitedCheckControl.setValidators(null);
  //      }
  //
  //      if (petGender === 'male') {
  //        lostCheckControl.setValidators([Validators.requiredTrue]);
  //        foundStrayCheckControl.setValidators(//[Validators.requiredTrue]);
  //        reunitedCheckControl.setValidators([Validators.requiredTrue])//;
  //      }
  //
  //      lostCheckControl.updateValueAndValidity();
  //      foundStrayCheckControl.updateValueAndValidity();
  //      reunitedCheckControl.updateValueAndValidity();
  //    });
  //  }

  // ToDo: 8-28-2019 Make custom validator its own Directive
  atLeastOneCheckedValidator(minRequired = 1): ValidatorFn {
    return function validate(petStatus: FormGroup) {
      let checked = 0;

      Object.key(petStatus.controls).forEach(key => {
        const control = petStatus.controls[key];

        if (control.value === true) {
          checked++;
        }
      });
      if (checked < minRequired) {
        return {
          requireCheckboxToBeChecked: true,
        };
      }
      return null;
    };
  }

  // Temporary submit method, shows search results from .json local file
  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;

    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }

  // get search form values
  // onSubmit() {
  //   this.submitted = true;
  //   this.petService.getPetSearch(this.searchForm.value).subscribe(
  //     data => console.log('Success!', data),
  //     error => this.errorMsg = error.statusText
  //   );
  //
  //   // get pet-items from local json file
  //   this.petService.getPets().subscribe(pets => {
  //     this.pets = pets;
  //   });
  // }


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
}

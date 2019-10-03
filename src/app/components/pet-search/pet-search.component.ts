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
  // INIT petType SELECT VALUES
  petTypes = ['All Species', 'Cat', 'Dog', 'Other'];
  // INIT searchDistance SELECT VALUES
  searchDistances = ['10 miles', '25 miles', '50 miles', '100 miles'];
  // INIT petGender VALUES
  petGenders = ['Male', 'Female'];
  // INIT addedDate SELECT VALUES
  addedDates = [
    'Last Day',
    'Last 3 Days',
    'Last Week',
    'Last 2 Weeks',
    'Last Month',
    'Any Time'
  ];
  // INIT sortBy SELECT VALUES
  sortBySelections = ['Most Recent', 'Oldest First'];
  // INIT DEFAULT VALUE OF SUBMIT EVENT
  submitted = false;
  // INIT ERRORMSG
  public errorMsg = '';
  // DECLARE PET LIST
  public pets = [];
  // DECLARE searchForm FORMGROUP
  searchForm: FormGroup;

  // INJECT INSTANCE OF PETSERVICE
  constructor(private petService: PetService) { }
  ngOnInit() {
    this.searchForm = new FormGroup({
      petName: new FormControl(''),
      petType: new FormControl(this.petTypes[0]),
      location: new FormControl(''),
      searchDistance: new FormControl(this.searchDistances[0]),
      petStatus: new FormGroup({
        lostCheck: new FormControl(true),
        foundStrayCheck: new FormControl(true),
        reunitedCheck: new FormControl(false),
      }, requireCheckBoxesToBeCheckedValidator()),
      petGender: new FormControl(this.petGenders[0]),
      addedDate: new FormControl(this.addedDates[0]),
      sortBy: new FormControl(this.sortBySelections[0]),
    });
  }

  // SET petGender VALUE
  radioChangeHandler(e) {
    this.searchForm.get('petGender').setValue(e.target.value);
  }

  // CHANGE sortBy VALUE
  // ToDo: 9/30/2019 Change BUTTON text to 'Update' after 'submitted = true'
  changeSortBy(e) {
    this.searchForm.get('sortBy').setValue(e.target.value, {
      onlySelf: true
    });
  }

  // GET SEARCH FORM VALUES FROM localhost:3000. DISPLAYS SEARCH RESULTS FROM LOCAL JSON FILE
  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;

    if (this.searchForm.valid) {
      console.log(this.searchForm.value); // SHOW ON CONSOLE FORMGROUP searchForm's FORMCONTROL VALUES
      this.petService.getPetSearch(this.searchForm.value) // TEST FOR HTTP post IF FORMGROUP VALUES ARE RECEIEVED BY SERVER. THIS WILL BE USED FOR ADDING NEW PET OBJECT IN THE report-pet COMPONENT. WILL NOT BE USED IN THIS COMPONENET
        .subscribe(
          response => console.log('Success!', response),
          error => this.errorMsg = error.statusText
        );

      // GET PET-ITEMS FROM JSON FILE
      this.petService.getPets().subscribe(pets => {
        this.pets = pets;
        console.log(this.pets); // SHOW ON CONSOLE RETURN VALUE FROM getPets() METHOD FROM pet.service
      });
    }
  }

  // SORT pets BY MOST RECENT PET ADDED
  public get sortedPets(): object {
    if (this.sortBy.value === 'Most Recent') {
      return this.pets.sort((a, b) => (a.addedDate > b.addedDate) ? -1 : ((b.addedDate > a.addedDate) ? 1 : 0));
    } else {
      // ToDo: 9/30/2019 Sort by distance from user's location. Currently using to sort by DESCENDING addedDate
      return this.pets.sort((a, b) => (a.addedDate > b.addedDate) ? 1 : ((b.addedDate > a.addedDate) ? -1 : 0));
    }
  }

  // GET searchForm's 'sortBy' VALUE
  get sortBy() {
    return this.searchForm.get('sortBy');
  }
}

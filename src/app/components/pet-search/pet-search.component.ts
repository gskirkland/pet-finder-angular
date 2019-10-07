// COMPONENTS
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
// MODELS
import { Pet } from '../../models/Pet';
// SERVICES
import { PetService } from '../../services/pet.service';
// CUSTOM VALIDATOR
import { requireCheckBoxesToBeCheckedValidator } from '../../validators/custom.validators';
import { IPetStatus } from 'src/app/models/IPetStatus';


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
  // DECLARE PROPERTY TO HOLD SELECTED CHECKBOXES
  public selectedPetStatus = [];

  // DECLARE searchForm FORMGROUP
  searchForm: FormGroup;
  // petStatus array
  public petStatuses: IPetStatus[] = [
    {
      id: 100,
      name: 'Lost',
      value: 'lostCheck',
      selected: true,
    },
    {
      id: 200,
      name: 'Found',
      value: 'foundStrayCheck',
      selected: false
    },
    {
      id: 300,
      name: 'Reunited',
      value: 'reunitedCheck',
      selected: false
    }
  ];

  // INJECT INSTANCE OF PETSERVICE and FORMBUILDER
  constructor(private petService: PetService, private fb: FormBuilder) { }
  ngOnInit() {
    this.searchForm = this.fb.group({
      petName: [''],
      petType: [this.petTypes[0]],
      location: [''],
      searchDistance: [this.searchDistances[0]],
      petGender: [this.petGenders[0]],
      addedDate: [this.addedDates[0]],
      sortBy: [this.sortBySelections[0]],
      petStatus: this.fb.array([], requireCheckBoxesToBeCheckedValidator())
    });

    this.addCheckboxes();

  }
  // ADD CHECKBOXES TO SEARCHFORM
  private addCheckboxes() {
    this.petStatuses.forEach((name, i) => {
      const control = new FormControl(i === 0);
      (this.searchForm.controls.petStatus as FormArray).push(control);
    });
  }
  // GET petStatus FORMARRAY
  get petStatus() {
    return this.searchForm.get('petStatus') as FormArray;
  }
  // SET petGender VALUE
  radioChangeHandler(e) {
    this.searchForm.get('petGender').setValue(e.target.value);
  }

  // CHANGE sortBy VALUE
  changeSortBy(e) {
    this.searchForm.get('sortBy').setValue(e.target.value, {
      onlySelf: true
    });
  }

  // CHANGE SEARCH BUTTON TEXT
  setBtnText(element, text) {
    element.textContent = text;
  }

  // RESET SEARCH FORM
  // resetForm() {
  //   this.searchForm.reset(this.searchForm.root);
  //   (this as { submitted: boolean }).submitted = false;
  // }

  // GET SEARCH FORM VALUES FROM localhost:3000. DISPLAYS SEARCH RESULTS FROM LOCAL JSON FILE
  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;
    // GET SELECTED petStatus CHECKBOXES
    this.selectedPetStatus = this.searchForm.value.petStatus
      .map((v, i) => v ? this.petStatuses[i].id : null)
      .filter(v => v !== null);
    console.log(this.selectedPetStatus);

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

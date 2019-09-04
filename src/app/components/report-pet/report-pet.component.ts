import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { PetService } from '../../services/pet.service';

import { requireCheckBoxesToBeCheckedValidator } from '../../validators/custom.validators';

@Component({
  selector: 'app-report-pet',
  templateUrl: './report-pet.component.html',
  styleUrls: ['./report-pet.component.scss']
})
export class ReportPetComponent implements OnInit {
  // petType SELECT VALUES
  petTypes: any = ['All Species', 'Cat', 'Dog', 'Other'];
  // DEFAULT VALUE OF SUBMIT EVENT
  submitted = false;
  // INIT ERRORMSG
  errorMsg = '';
  // INIT PET LIST
  pets = [];

  // INJECT INSTANCE OF PETSERVICE
  constructor(private petService: PetService) { }

  reportForm = new FormGroup({
    petId: new FormControl(''),
    petType: new FormControl(this.petTypes[0]),
    location: new FormControl(''),
    petStatus: new FormGroup({
      lostCheck: new FormControl(true),
      foundStrayCheck: new FormControl(false),
    }, requireCheckBoxesToBeCheckedValidator()),
    petGender: new FormControl('male'),
    dateLostFound: new FormControl(''),
  });

  // CHANGE petType VALUE
  changePetType(e) {
    this.reportForm.get('petType').setValue(e.target.value, {
      onlySelf: true
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;

    if (this.reportForm.valid) {
      console.log(this.reportForm.value);
    }
  }

  ngOnInit() {
  }

}

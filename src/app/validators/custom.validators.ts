// import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';
//
// AT LEAST ONE CHECKBOX CHECKED VALIDATOR
// export function petStatusMinCheckedValidator(petStatus: FormGroup): AbstractControl {
//  const minCheckedRequired = 1;
//  let checked = 0;
//
//  Object.keys(petStatus.value).forEach(key => {
//    const control = petStatus.value[key];
//
//    if (control.value === true) {
//      checked++;
//    }
//  });
//  if (checked < minCheckedRequired) {
//    return {  }
//
//    }
//  }

// AT LEAST ONE CHECKBOX IS CHECKED VALIDATOR
import { FormGroup, ValidatorFn } from '@angular/forms';

export function requireCheckBoxesToBeCheckedValidator(minCheckedRequired = 1): ValidatorFn {
  return function validate(formGroup: FormGroup) {
    let checked = 0;

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];

      if (control.value === true) {
        checked++;
      }
    });

    if (checked < minCheckedRequired) {
      return {
        requireOneCheckBoxToBeChecked: true,
      };
    }
    return null;
  };
}

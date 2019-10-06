// AT LEAST ONE CHECKBOX IS CHECKED VALIDATOR
import { FormGroup, ValidatorFn, FormArray } from '@angular/forms';

export function requireCheckBoxesToBeCheckedValidator(minCheckedRequired = 1): ValidatorFn {
  return function validate(formArray: FormArray) {
    let checked = 0;

    Object.keys(formArray.controls).forEach(key => {
      const control = formArray.controls[key];

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

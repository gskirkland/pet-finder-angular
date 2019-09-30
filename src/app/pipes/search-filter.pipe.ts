import { PipeTransform, Pipe } from '@angular/core';
import { Pet } from '../models/Pet';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'searchFilter'
})
// export class SearchFilterPipe implements PipeTransform {
//   transform(sortedPets: any[], value: string, prop: string): any[] {
//     if (!sortedPets) return [];
//     if (!value) return value;
//     return value.searchFilter(singlePet =>
//       singlePet[prop].toLowerCase().startsWith(value.toLowerCase())
//     );
//   }
// }

// ToDo: 9/30/2019 NEEDS NEW ARRAY TO HOLD RESULTS, NEEDS SEARCHFORM OBJECT HOLDING KEY:VALUE PAIRS OF ALL INPUTS,
// NEEDS EITHER forEach() or filter() METHODS TO LOOP THROUGH EACH PROPERTY IN, NEEDS TO COMPARE SEARCHFORM INPUT
// PROPERTY VALUES AGAINST PET[] DATA FROM STORED DATA VALUES AND IF COMPARISON = true ADD TO RESULTS ARRAY, RETURN
// THE NEW RESULTS ARRAY

export class SearchFilterPipe implements PipeTransform {
  transform(sortedPets: Pet[], location: string): Pet[] {
    if (!sortedPets || !location) {
      return sortedPets;
    }
    return sortedPets.filter(pet =>
      pet.location.toString().toLowerCase().indexOf(location.toString().toLowerCase()) !== -1);
  }
}

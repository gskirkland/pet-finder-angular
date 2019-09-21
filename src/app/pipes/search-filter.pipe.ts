import { PipeTransform, Pipe } from '@angular/core';
import { Pet } from '../models/Pet';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'searchFilter'
})
// ToDo: 9/20/2019 Fix SearchFilterPipe
// export class SearchFilterPipe implements PipeTransform {
//   transform(sortedPets: any[], value: string, prop: string): any[] {
//     if (!sortedPets) return [];
//     if (!value) return value;
//     return value.searchFilter(singlePet =>
//       singlePet[prop].toLowerCase().startsWith(value.toLowerCase())
//     );
//   }
// }



export class SearchFilterPipe implements PipeTransform {
  transform(sortedPets: Pet[], location: string): Pet[] {
    if (!sortedPets || !location) {
      return sortedPets;
    }
    return sortedPets.filter(pet =>
      pet.location.toString().toLowerCase().indexOf(location.toString().toLowerCase()) !== -1);
  }
}

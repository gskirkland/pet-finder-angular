import { PipeTransform, Pipe } from '@angular/core';
import { Pet } from '../models/Pet';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(sortedPets: Pet[], searchTerm: string): Pet[] {
    if (!sortedPets || !searchTerm) {
      return sortedPets;
    }

    return sortedPets.filter(pet =>
      pet.location.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}

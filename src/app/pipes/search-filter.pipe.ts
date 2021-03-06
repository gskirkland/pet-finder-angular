import { PipeTransform, Pipe } from '@angular/core';
import { Pet } from '../models/Pet';
import { FormGroup, FormArray } from '@angular/forms';

@Pipe({
  name: 'searchFilter'
})
// ToDo: 10/14/2019 Show 'No Results Found' message if no results(lost,female,other has no results)
export class SearchFilterPipe implements PipeTransform {
  transform(sortedPets: Pet[], searchForm: FormGroup): Pet[] {
    if (!sortedPets || !searchForm.value) {
      return sortedPets;
    } /*SHOW ALL SPECIES*/ else if (searchForm.get('petType').value.toString() === 'All Species') {
      const filteredPets = sortedPets
        .filter(pet => pet.petName.toString().toLowerCase().indexOf(searchForm.get('petName').value.toString().toLowerCase()) !== -1)
        .filter(pet => pet.location.toString().toLowerCase().indexOf(searchForm.get('location').value.toString().toLowerCase()) !== -1)
        .filter(pet => pet.petGender.toString().indexOf(searchForm.get('petGender').value.toString()) !== -1);
      return filteredPets;
    } /*SHOW CATS*/ else if (searchForm.get('petType').value.toString() === 'Cat') {
      const filteredPets = sortedPets
        .filter(pet => pet.petType === 'Cat')
        .filter(pet => pet.petName.toString().toLowerCase().indexOf(searchForm.get('petName').value.toString().toLowerCase()) !== -1)
        .filter(pet => pet.location.toString().toLowerCase().indexOf(searchForm.get('location').value.toString().toLowerCase()) !== -1)
        .filter(pet => pet.petGender.toString().indexOf(searchForm.get('petGender').value.toString()) !== -1);
      return filteredPets;
    } /*SHOW DOGS*/ else if (searchForm.get('petType').value.toString() === 'Dog') {
      const filteredPets = sortedPets
        .filter(pet => pet.petType === 'Dog')
        .filter(pet => pet.petName.toString().toLowerCase().indexOf(searchForm.get('petName').value.toString().toLowerCase()) !== -1)
        .filter(pet => pet.location.toString().toLowerCase().indexOf(searchForm.get('location').value.toString().toLowerCase()) !== -1)
        .filter(pet => pet.petGender.toString().indexOf(searchForm.get('petGender').value.toString()) !== -1);
      return filteredPets;
    } /*DO NOT SHOW CATS OR DOGS*/ else if (searchForm.get('petType').value.toString() === 'Other') {
      const filteredPets = sortedPets
        .filter(pet => pet.petType !== 'Cat')
        .filter(pet => pet.petType !== 'Dog')
        .filter(pet => pet.petName.toString().toLowerCase().indexOf(searchForm.get('petName').value.toString().toLowerCase()) !== -1)
        .filter(pet => pet.location.toString().toLowerCase().indexOf(searchForm.get('location').value.toString().toLowerCase()) !== -1)
        .filter(pet => pet.petGender.toString().indexOf(searchForm.get('petGender').value.toString()) !== -1);
      return filteredPets;
    }
  }
}

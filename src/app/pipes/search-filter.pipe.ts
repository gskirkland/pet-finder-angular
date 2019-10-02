import { PipeTransform, Pipe } from '@angular/core';
import { Pet } from '../models/Pet';
import { FormGroup } from '@angular/forms';

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

// ToDo: 10/01/2019 Finish filter by petType='All Species', 'Other', and filter by checkboxes
export class SearchFilterPipe implements PipeTransform {
  transform(sortedPets: Pet[], searchForm: FormGroup): Pet[] {
    if (!sortedPets || !searchForm.value) {
      return sortedPets;
    }
    return sortedPets
      .filter(pet => pet.petName.toString().toLowerCase().indexOf(searchForm.get('petName').value.toString().toLowerCase()) !== -1)
      // ToDo: 10/01/2019 Fix return values when 'All Species' and 'Other' are selected
      .filter(pet => pet.petType.toString().toLowerCase().indexOf(searchForm.get('petType').value.toString().toLowerCase()) !== -1)
      .filter(pet => pet.location.toString().toLowerCase().indexOf(searchForm.get('location').value.toString().toLowerCase()) !== -1)
      // ToDo: 10/01/2019 Fix checkbox value filters
      // .filter(pet => searchForm.get('petStatus.lostCheck'))
      // .filter(pet => pet.lostCheck.toString().indexOf(searchForm.get('petStatus.lostCheck').toString()) !== -1)
      // .filter(pet => pet.foundStrayCheck.toString().indexOf(searchForm.get('petStatus.foundStrayCheck').toString()) !== -1)
      // .filter(pet => pet.reunitedCheck.toString().indexOf(searchForm.get('petStatus.reunitedCheck').toString()) !== -1);
      .filter(pet => pet.petGender.toString().indexOf(searchForm.get('petGender').value.toString()) !== -1);
    // .filter(pet => pet.addedDate.toString().toLowerCase().indexOf(searchForm.get('addedDate').value.toString().toLowerCase()) !== -1);
  }
}

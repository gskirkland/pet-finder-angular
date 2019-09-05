import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetSearchComponent } from './components/pet-search/pet-search.component';
import { ReportPetComponent } from './components/report-pet/report-pet.component';


const routes: Routes = [
  { path: 'search', component: PetSearchComponent },
  { path: 'report', component: ReportPetComponent },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

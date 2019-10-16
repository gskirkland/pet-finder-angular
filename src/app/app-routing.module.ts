import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetSearchComponent } from './components/pet-search/pet-search.component';
import { PetDetailComponent } from './components/pet-item/pet-detail/pet-detail.component';
import { ReportPetComponent } from './components/report-pet/report-pet.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: 'search', component: PetSearchComponent },
  { path: 'pet/:id', component: PetDetailComponent },
  { path: 'report', component: ReportPetComponent },
  { path: 'about', component: AboutComponent },
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

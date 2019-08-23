import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PetSearchComponent } from './components/pet-search/pet-search.component';
import { PetItemComponent } from './components/pet-item/pet-item.component';
import { ReportPetComponent } from './components/report-pet/report-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PetSearchComponent,
    PetItemComponent,
    ReportPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

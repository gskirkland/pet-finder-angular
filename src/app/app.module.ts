import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PetSearchComponent } from './components/pet-search/pet-search.component';
import { PetItemComponent } from './components/pet-item/pet-item.component';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent, PetSearchComponent, PetItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

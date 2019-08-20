import { Component, OnInit } from "@angular/core";
import { Pet } from "../../models/Pet";

@Component({
  selector: "app-pet-search",
  templateUrl: "./pet-search.component.html",
  styleUrls: ["./pet-search.component.scss"]
})
export class PetSearchComponent implements OnInit {
  pets: Pet[];

  constructor() {}

  ngOnInit() {
    this.pets = [
      {
        petId: 1,
        location: "Cleveland, TN",
        petType: "Dog",
        imageUrl: "https://i.imgur.com/N07faG2.jpg",
        petDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis sint. Blanditiis itaque, autem laboriosam tempore deleniti iusto aut libero quam, consequatur alias placeat dolores vitae optio delectus."
      },
      {
        petId: 2,
        location: "Cleveland, TN",
        petType: "Dog",
        imageUrl: "https://i.imgur.com/N07faG2.jpg",
        petDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis sint. Blanditiis itaque, autem laboriosam tempore deleniti iusto aut libero quam, consequatur alias placeat dolores vitae optio delectus."
      },
      {
        petId: 3,
        location: "Cleveland, TN",
        petType: "Dog",
        imageUrl: "https://i.imgur.com/N07faG2.jpg",
        petDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis sint. Blanditiis itaque, autem laboriosam tempore deleniti iusto aut libero quam, consequatur alias placeat dolores vitae optio delectus."
      }
    ];
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { PetService } from '../../services/pet.service';

import { Pet } from 'src/app/models/Pet';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss']
})
export class PetItemComponent implements OnInit {
  @Input() pet: Pet;

  constructor(private petService: PetService) { }

  ngOnInit() { }
}

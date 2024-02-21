import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { CardModule } from 'primeng/card';
import { ButtonModule, } from 'primeng/button';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,CardModule,ButtonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

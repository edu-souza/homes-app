import { Component } from '@angular/core';
import { ButtonModule, } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule,InputTextModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}

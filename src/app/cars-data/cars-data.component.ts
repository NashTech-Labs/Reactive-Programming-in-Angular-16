import { Component } from '@angular/core';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-cars-data',
  templateUrl: './cars-data.component.html',
  styleUrls: ['./cars-data.component.css']
})
export class CarsDataComponent {
  /**
   * Observable that holds the brand names fetched from the CarsListService.
   */
  data$ = this.carsService.getBrandName();

  /**
   * Creates an instance of CarBrandsComponent.
   * @param {CarsService} carsService - The CarsService to interact with data related to car brands.
   */
  constructor(private carsService: CarsService) { }
}

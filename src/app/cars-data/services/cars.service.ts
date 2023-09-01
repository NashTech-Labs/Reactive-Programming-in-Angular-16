import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CarsDetails} from '../models/cars.model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiUrl = 'https://my.api.mockaroo.com/car_brand_random.json?key=dcbc8750';

  constructor(private httpClient: HttpClient) {}

  getBrandName(): Observable<CarsDetails[]> {
    return this.httpClient.get<CarsDetails[]>(this.apiUrl);
  }
}
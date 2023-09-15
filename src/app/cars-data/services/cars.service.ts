import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CarsDetails} from '../models/cars.model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiUrl = 'your-api-uri';

  constructor(private httpClient: HttpClient) {}

  getBrandName(): Observable<CarsDetails[]> {
    return this.httpClient.get<CarsDetails[]>(this.apiUrl);
  }
}
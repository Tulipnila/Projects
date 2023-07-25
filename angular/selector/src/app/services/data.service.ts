import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cars:string[] = [];

  getCars(): string[] {
    return this.cars;
  }

  addCars(item:string):void {
    this.cars.push(item);
  }
}


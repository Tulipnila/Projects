import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  newCar: string = "";

  constructor(private dataService:DataService){}
     
    addCars():void {
      if(this.newCar.trim() !== ""){
        this.dataService.addCars(this.newCar);
        this.newCar = "";
      }
    }
  }


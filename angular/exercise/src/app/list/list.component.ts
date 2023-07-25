import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 cars:string[] =[];

 carDataUpdated(carsData:string[]){
  this.cars = carsData;

 }
}

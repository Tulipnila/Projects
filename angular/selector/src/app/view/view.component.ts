import { Component} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  cars: string[] =[];

  constructor(private dataService:DataService) {
    this.cars = this.dataService.getCars();
  }
  

}

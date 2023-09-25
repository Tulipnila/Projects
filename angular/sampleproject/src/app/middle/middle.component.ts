import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  bookId: number = 10;
  bookName: string = "Ponniyin Selvan";
  author: string="Kalki";
  bookStatus: string ="Available";

  btnToggle: boolean =true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.btnToggle=false;
    }, 2000);
  }
  onToggle() {
    if(this.bookStatus == "Available") {
      this.bookStatus="Not Available";
    } else {
      this.bookStatus= "Available"
    }
  }
  
}

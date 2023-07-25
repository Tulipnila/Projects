import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  items : string[] = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

  onDelete(item:string) {
    const index = this.items.indexOf(item);
    if(index !== -1) {
      this.items.splice(index,1);
    }
  }
}

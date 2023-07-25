import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() selectedItem: string='';
  @Output() itemSelected = new EventEmitter<string>();

  items: string[] = ['Audi', 'Benz', 'BMW', 'Ferrari', 'Maruti','Tesla'];
  
  onItemClick(item: string){
    this.itemSelected.emit(item);
  }
}

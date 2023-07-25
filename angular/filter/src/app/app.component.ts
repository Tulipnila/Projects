import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItem: string = '';
  showList = false;

  toggleList() {
    this.showList = !this.showList;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.showList = false; // Hide the list after selecting an item
  }
  @HostListener('document:click', ['$event'])
  onClick(event:MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.input')) {
      this.showList = false;
    }
  }
}

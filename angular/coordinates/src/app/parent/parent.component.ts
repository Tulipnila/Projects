// parent.component.ts
import { Component } from '@angular/core';

interface Box {
  x: number;
  y: number;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  boxes: Box[] = [];

  onDoubleClick(event: MouseEvent) {
    const container = document.querySelector('.box-container') as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const boxSize = 10; // Adjust the box size as per your requirement

    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

    // Ensure the new box is within the container bounds
    if (x < 0 || y < 0 || x + boxSize > containerRect.width || y + boxSize > containerRect.height) {
      return;
    }

    const newBox: Box = { x, y };

    // Check if the new box overlaps with any previously created box
    if (this.checkOverlapping(newBox)) {
      return;
    }

    this.boxes.push(newBox);

    // Update the URL with the new coordinates
    const urlSearchParams = new URLSearchParams();
    this.boxes.forEach((box, index) => {
      urlSearchParams.append(`box${index}`, `(${box.x},${box.y})`);
    });
    const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }

  checkOverlapping(newBox: Box): boolean {
    const boxSize = 10; // Width and height of the new box
    for (const box of this.boxes) {
      const isOverlappingX = newBox.x + boxSize > box.x && box.x + boxSize > newBox.x;
      const isOverlappingY = newBox.y + boxSize > box.y && box.y + boxSize > newBox.y;

      if (isOverlappingX && isOverlappingY) {
        return true; // Overlapping
      }
    }
    return false; // Not overlapping
  }
}

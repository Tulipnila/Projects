import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: string[], filter: string): string[] {
    if (!filter) return items; // If filter is empty, return all items
    filter = filter.toLowerCase(); // Convert filter to lowercase for case-insensitive filtering
    return items.filter((item) => item.toLowerCase().includes(filter));
  }
}

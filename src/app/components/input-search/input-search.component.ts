import { Component, input } from '@angular/core';

@Component({
  selector: 'input-search',
  standalone: true,
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent {
  search(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
  }
}

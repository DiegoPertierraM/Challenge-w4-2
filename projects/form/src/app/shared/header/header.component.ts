import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>{{ title }}</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: `
    :host {
      background-color: #444444;
      color: white;
      text-align: center;
    }

    h2 {
      text-align: center;
    }
  `,
})
export class HeaderComponent {
  @Input({ required: true }) title = '';
}

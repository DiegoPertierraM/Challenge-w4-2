import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <address>{{ brand }}</address>
    </footer>
  `,
  styles: `
    footer {
      background-color: #444444;
      border-top: 1px solid #e7e7e7;
      padding: 10px 0;
      text-align: center;
      color: white;
    }
  `,
})
export class FooterComponent {
  @Input({ required: true }) brand: string = '';
}
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
      border-top: 1px solid #e7e7e7;
      padding: 10px 0;
      text-align: center;
      color: white;
      background-color: rgb(255, 104, 104);
    }
  `,
})
export class FooterComponent {
  @Input({ required: true }) brand: string = '';
}

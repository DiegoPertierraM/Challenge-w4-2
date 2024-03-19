import { Component } from '@angular/core';
import { FormComponent } from './features/form/form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [FormComponent, HeaderComponent, FooterComponent, RouterModule],
  template: `
    <isdi-header [title]="'Angular & TypeScript form'" />
    <main>
      <isdi-form />
    </main>
    <isdi-footer [brand]="brand" />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'form';
  brand = 'ISDI Coders - Diego';
}

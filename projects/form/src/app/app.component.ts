import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './features/form/form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'form';
}

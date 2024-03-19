import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'isdi-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styles: `
  .control {
      padding: 0.5rem 0;
    }
    .control label {
      display: flex;
      flex-direction: column;
    }
    input {
      padding-block: 0.3rem;
      font-size: 0.9rem;
    }
    select {
      padding-block: 0.3rem;
      font-size: 0.9rem;
    }
  `,
})
export default class LoginComponent {}

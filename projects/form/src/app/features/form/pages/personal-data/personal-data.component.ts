import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'isdi-personal-data',
  standalone: true,
  imports: [FormsModule, JsonPipe, RouterModule],
  templateUrl: './personal-data.component.html',
  styles: `
    .control {
      padding: 0.5rem 0;
    }
    .control label {
      display: flex;
      flex-direction: column;
    }
    legend {
      margin-block-start: 1.5rem;
    }
    .radio {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
    input {
      padding-block: 0.3rem;
      font-size: 0.9rem;
    }
  `,
})
export default class PersonalDataComponent implements OnInit {
  @ViewChild('form', {
    static: true,
  })
  form!: ElementRef;
  @ViewChild('ngForm', {
    static: true,
  })
  ngForm!: NgForm;
  ngOnInit(): void {
    console.dir(this.form.nativeElement);
    console.dir(this.ngForm);
  }
  onSubmit() {
    console.log(this.ngForm.value);
  }
}

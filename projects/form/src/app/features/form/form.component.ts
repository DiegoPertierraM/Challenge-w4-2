import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'isdi-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  constructor(private router: Router) {}
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

  isCurrentPage(): boolean {
    return this.router.url === '/personal_data';
  }
}

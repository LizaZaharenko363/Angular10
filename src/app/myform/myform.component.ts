import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myform',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css'],
})
export class MyformComponent {
  nestedForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nestedForm = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        age: ['', [Validators.required, Validators.min(18)]],
      }),
      address: this.fb.group({
        city: ['', Validators.required],
        zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      }),
    });
  }

  updateForm() {
    this.nestedForm.patchValue({
      personalInfo: {
        name: 'Ivan Ivanenko',
        age: 20,
      },
      address: {
        city: 'Kyiv',
        zipCode: '12345',
      },
    });
  }

  get formValues() {
    return this.nestedForm.value;
  }
}

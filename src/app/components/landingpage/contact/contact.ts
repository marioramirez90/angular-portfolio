import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

 userform = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required,Validators.minLength(4)]
    }),

    email: new FormControl('', {
      validators: [Validators.required,Validators.email]

    }),
    text: new FormControl('', {
      validators: [Validators.required,Validators.minLength(10)]

    }),
  })
  

}

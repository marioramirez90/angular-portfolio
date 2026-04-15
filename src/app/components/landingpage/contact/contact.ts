import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';



@Component({
  selector: 'app-contact',
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);

  userform = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    text: ['', [Validators.required, Validators.minLength(10)]],
    checkbox: [false, [Validators.requiredTrue]],
  });

  focused: Record<string, boolean> = {};

  onFocus(field: string) {
    this.focused[field] = true;
    this.userform.get(field)?.markAsTouched();
  }

  onSubmit() {
    if (this.userform.valid) {
      console.log(this.userform.value);
      this.userform.reset();
      this.focused = {};
    }
  }
}

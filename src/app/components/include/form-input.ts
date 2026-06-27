import { Component, Input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormInputErrorsComponent } from './form-input-errors';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.html',
  imports: [FormsModule],
})
export class FormInputComponent {

  model = model<string>('');

  @Input() placeholder = '';
  @Input() type = 'text';

  @Input() required = false;
  @Input() maxLength?: number;

  @Input() multiline = false;
  @Input() rows = 4;

  @Input() pattern = '';

  clear() {
    this.model.set('');
  }
}
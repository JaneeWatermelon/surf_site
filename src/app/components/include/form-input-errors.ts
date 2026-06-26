import { Component, Input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'form-input-errors',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './form-input-errors.html',
})
export class FormInputErrorsComponent {

//   @Input() errors: ValidationErrors | null = null;
  @Input() errors: null = null;

}
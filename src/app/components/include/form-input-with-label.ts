import { Component, Input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormInputErrorsComponent } from './form-input-errors';
import { KeyValuePipe } from '@angular/common';

type LabelIcon = 'refresh' | 'eye' | null;
type LeftIcon = 'email' | null;
type RightIcon = 'clear' | null;

@Component({
  selector: 'form-input-with-label',
  templateUrl: './form-input-with-label.html',
  imports: [FormsModule, KeyValuePipe],
})
export class FormInputWithLabelComponent {

  model = model<string>('');

  @Input() field = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';

  @Input() required = false;
  @Input() maxLength?: number;

  @Input() labelIcon: LabelIcon = null;
  @Input() leftIcon: LeftIcon = null;
  @Input() rightIcon: RightIcon = null;

  @Input() multiline = false;
  @Input() rows = 4;

  clear() {
    this.model.set('');
  }
}
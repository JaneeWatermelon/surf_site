import { Component, Input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormInputErrorsComponent } from './form-input-errors';
import { KeyValuePipe } from '@angular/common';
import { FormInputComponent } from './form-input';

type LabelIcon = 'refresh' | 'eye' | null;
type LeftIcon = 'email' | null;
type RightIcon = 'clear' | null;

@Component({
  selector: 'form-input-with-label',
  templateUrl: './form-input-with-label.html',
  imports: [FormsModule, FormInputComponent],
})
export class FormInputWithLabelComponent {
  
  // Переменные текущей компоненты
  @Input() label = '';
  
  @Input() labelIcon: LabelIcon = null;
  @Input() leftIcon: LeftIcon = null;
  @Input() rightIcon: RightIcon = null;
  
  // Переменные input компоненты
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
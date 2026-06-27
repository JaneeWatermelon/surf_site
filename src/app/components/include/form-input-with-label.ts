import { Component, Input, model, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FormInputErrorsComponent } from './form-input-errors';
import { KeyValuePipe } from '@angular/common';
import { FormInputComponent } from './form-input';

type LabelIcon = 'refresh' | 'eye-show' | 'eye-off' | null;
type LeftIcon = 'email' | null;
type RightIcon = 'clear' | null;

@Component({
  selector: 'form-input-with-label',
  templateUrl: './form-input-with-label.html',
  imports: [FormsModule, FormInputComponent, FormInputErrorsComponent],
})
export class FormInputWithLabelComponent {
  
  // Переменные текущей компоненты
  @ViewChild('inp')
  inp?: NgModel;
  
  @Input() label = '';
  
  @Input() labelIcon: LabelIcon = null;
  @Input() leftIcon: LeftIcon = null;
  @Input() rightIcon: RightIcon = 'clear';
  
  // Переменные input компоненты
  model = model<string>('');

  @Input() placeholder = '';
  @Input() type = 'text';

  @Input() required = false;
  @Input() maxLength?: number;

  @Input() multiline = false;
  @Input() rows = 4;
  
  @Input() pattern = '';
  @Input() patternErrorText = '';
  
  clear() {
    this.model.set('');
  }
}
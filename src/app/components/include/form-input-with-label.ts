import { Component, Input, model, signal, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FormInputErrorsComponent } from './form-input-errors';

type LabelIcon = 'refresh' | 'eye-show' | 'eye-off' | null;
type LeftIcon = 'email' | null;
type RightIcon = 'clear' | null;

@Component({
  selector: 'form-input-with-label',
  templateUrl: './form-input-with-label.html',
  imports: [FormsModule, FormInputErrorsComponent],
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

  protected passwordVisible = signal(false);

  protected get inputType(): string {
    if (this.type !== 'password') {
      return this.type;
    }

    return this.passwordVisible() ? 'text' : 'password';
  }

  togglePasswordVisibility(): void {
    this.passwordVisible.update(v => !v);
  }
}
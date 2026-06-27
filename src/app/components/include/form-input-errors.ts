import { Component, Input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'form-input-errors',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './form-input-errors.html',
})
export class FormInputErrorsComponent {

  @Input() errors: ValidationErrors | null = null;
  @Input() patternErrorText: string = '';
  
  readonly errorMessages: Record<string, (value: any) => string> = {
    required: () => 'Поле является обязательным.',
    email: () => 'Введите корректный адрес электронной почты.',
    minlength: (e) => `Минимальная длина — ${e.requiredLength} символов.`,
    maxlength: (e) => `Максимальная длина — ${e.requiredLength} символов.`,
    pattern: () => 'Поле заполнено некорректно.',
  };

  getErrorMessage(key: string, value: any): string {
    return this.errorMessages[key]?.(value) ?? 'Некорректное значение.';
  }

}
// form-min-length.directive.ts
import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[formMinLength]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FormMinLengthDirective,
      multi: true
    }
  ]
})
export class FormMinLengthDirective implements Validator {
  @Input() formMinLength: number = 0;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const min = this.formMinLength ?? 0;
    
    if (!value && min > 0) {
      // Если поле пустое, но обязательно, пусть required валидатор обрабатывает
      return null;
    }
    
    if (value && value.length < min) {
      return {
        minlength: {
          requiredLength: min,
          actualLength: value.length
        }
      };
    }
    
    return null;
  }
}
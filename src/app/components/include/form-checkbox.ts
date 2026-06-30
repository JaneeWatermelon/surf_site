import { Component, Input, input, model, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'form-checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-checkbox.html',
//   styleUrl: ''
})
export class FormCheckboxComponent {
  @ViewChild('inp')
  inp?: NgModel;

  @Input() submitted: boolean = false;
  
  model = model<boolean>(false);

  @Input() label = '';
  @Input() name = '';

  get showErrors(): boolean {
    return !!this.inp?.errors && (this.submitted || !!this.inp?.touched);
  }
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-modal',
  templateUrl: './form-modal.html',
})
export class FormModalComponent {
  @Input() headerClass = '';
  @Input() contentClass = '';

  onClick() {
    console.log('submit');
  }
}
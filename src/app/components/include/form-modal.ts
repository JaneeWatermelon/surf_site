import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-modal',
  templateUrl: './form-modal.html',
})
export class FormModalComponent {
  // @Input() title = 'Название формы';

  onClick() {
    console.log('submit');
  }
}
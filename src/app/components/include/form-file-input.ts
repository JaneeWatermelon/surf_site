import { Component, effect, Input, model } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';

@Component({
  selector: 'form-file-input',
  imports: [...SHARED_IMPORTS],
  templateUrl: './form-file-input.html',
})
export class FormFileInputComponent {
  @Input() label = '';
  // @Input() file?: File | null;
  file = model<File | null>(null);

  selectedFileName = '';

  constructor() {
    effect(() => {
      const file = this.file();

      this.selectedFileName = file?.name ?? '';
    });
  }

  onSelect(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];

    this.file.set(file);
    this.selectedFileName = file.name;
  }
}


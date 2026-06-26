import { Component, Input } from '@angular/core';
import { Post_add_data } from '../../models/post_add_data';
import { SHARED_IMPORTS } from '../../shared-imports';

@Component({
  selector: 'form-file-input',
  imports: [...SHARED_IMPORTS],
  templateUrl: './form-file-input.html',
})
export class FormFileInputComponent {
  @Input() label = '';
  @Input() file?: File | null;

  selectedFileName = '';

  onSelect(event: Event) {
      const input = event.target as HTMLInputElement;

      if (!input.files?.length) {
          return;
      }

      this.file = input.files[0];
      this.selectedFileName = this.file.name;
  }
}


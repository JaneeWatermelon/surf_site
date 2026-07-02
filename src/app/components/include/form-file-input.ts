import { Component, effect, EventEmitter, Input, model, Output, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormInputErrorsComponent } from './form-input-errors';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'form-file-input',
  imports: [...SHARED_IMPORTS, FormInputErrorsComponent],
  templateUrl: './form-file-input.html',
})
export class FormFileInputComponent {
  @Input() label = '';
  @Input() accept = '';

  @Input() name = '';

  // @Input() file?: File | null;
  file = model<File | null>(null);

  @Output() fileSelected = new EventEmitter<File | null>();

  selectedFileName = '';


  // Переменные текущей компоненты
  @ViewChild('inp')
  inp?: NgModel;

  @Input() serverErrors: string[] = [];
  
  @Input() form?: NgForm;
  
  @Input() submitted: boolean = false;

  get showErrors(): boolean {
    return !!this.inp?.errors && (this.submitted || !!this.inp?.touched);
  }

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

    this.fileSelected.emit(file);
  }
}


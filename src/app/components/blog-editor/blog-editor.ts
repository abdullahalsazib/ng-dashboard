import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-blog-editor',
  imports: [FormsModule, AngularEditorModule],
  // templateUrl: './blog-editor.html',
  template: `
    <angular-editor [(ngModel)]="content" [style]="{ height: '300px' }"> </angular-editor>

    <div class="preview mt-3">
      <h3>Preview:</h3>
      <div [innerHTML]="content"></div>
    </div>
  `,
  styleUrl: './blog-editor.css',
})
export class BlogEditor {
  content: string = '<p>Start writing your blog here...</p>';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '300px',
    minHeight: '200px',
    maxHeight: '600px',
    placeholder: 'Enter blog content here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['strikeThrough', 'subscript', 'superscript'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
    ],
  };
}

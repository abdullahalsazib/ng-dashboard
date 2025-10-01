import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogEditor } from './components/blog-editor/blog-editor';

@Component({
  selector: 'app-root',
  imports: [BlogEditor, FontAwesomeModule],
  templateUrl: './app.html',
})
export class App {}

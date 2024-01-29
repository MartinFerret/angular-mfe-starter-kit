import {Component, signal} from '@angular/core';
import {SharedLibraryComponent} from "shared-library";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    SharedLibraryComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  title = signal('👋 from mfe1');
}

import {Component, signal} from '@angular/core';
import {SharedLibraryComponent} from "shared-library";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedLibraryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = signal('👋 from shell');
}

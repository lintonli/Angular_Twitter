import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Twitter';
}
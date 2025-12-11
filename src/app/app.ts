import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shared } from './shared/shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Shared],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}

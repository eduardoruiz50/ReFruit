import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Refruit } from './components/refruit/refruit';
import { Features } from './components/features/features';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Refruit, Features, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-landing-page');
}

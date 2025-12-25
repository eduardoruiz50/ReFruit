import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-refruit',
  imports: [],
  templateUrl: './refruit.html',
  styleUrl: './refruit.css',
})
export class Refruit {
  t = inject(TranslationService);
}

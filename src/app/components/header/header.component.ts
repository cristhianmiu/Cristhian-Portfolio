import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service.spec';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private scroll: ScrollService) {}

  go(id: string) {
    this.scroll.scrollTo(id);
  }
}

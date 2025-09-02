import { Component } from '@angular/core';
import { MyCoverImageComponent } from './my-cover-image/my-cover-image.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from './skills/skills.component';
import { MyProyectsComponent } from './my-proyects/my-proyects.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [MyCoverImageComponent, AboutMeComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

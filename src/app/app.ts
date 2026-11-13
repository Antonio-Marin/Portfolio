import { Component } from '@angular/core';
import { ContactSection } from './contact-section/contact-section';
import { HeroSection } from './hero-section/hero-section';
import { KnowledgeSection } from './knowledge-section/knowledge-section';
import { ProjectsSection } from './projects-section/projects-section';
import { SiteHeader } from './site-header/site-header';
import { TrainingSection } from './training-section/training-section';

@Component({
  imports: [ContactSection, HeroSection, KnowledgeSection, ProjectsSection, SiteHeader, TrainingSection],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}

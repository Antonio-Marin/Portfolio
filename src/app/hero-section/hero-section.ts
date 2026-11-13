import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-hero-section',
  styleUrl: './hero-section.css',
  templateUrl: './hero-section.html',
})
export class HeroSection {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center space-x-2">
              <span class="text-2xl font-bold text-brand-orange">Printora</span>
              <span class="text-2xl font-bold text-brand-black">India</span>
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" routerLinkActive="text-brand-orange" [routerLinkActiveOptions]="{exact: true}" class="text-sm font-medium hover:text-brand-orange transition-colors">Home</a>
            <a routerLink="/services" routerLinkActive="text-brand-orange" class="text-sm font-medium hover:text-brand-orange transition-colors">Services</a>
            <a routerLink="/how-it-works" routerLinkActive="text-brand-orange" class="text-sm font-medium hover:text-brand-orange transition-colors">How It Works</a>
            <a routerLink="/gallery" routerLinkActive="text-brand-orange" class="text-sm font-medium hover:text-brand-orange transition-colors">Gallery</a>
            <a routerLink="/pricing" routerLinkActive="text-brand-orange" class="text-sm font-medium hover:text-brand-orange transition-colors">Pricing</a>
            <a routerLink="/contact" routerLinkActive="text-brand-orange" class="text-sm font-medium hover:text-brand-orange transition-colors">Contact</a>
            <a href="https://wa.me/916304895538" target="_blank" class="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition-all flex items-center gap-2">
              <mat-icon class="text-sm">chat</mat-icon> WhatsApp
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button (click)="isMenuOpen = !isMenuOpen" class="text-brand-black p-2">
              <mat-icon>{{ isMenuOpen ? 'close' : 'menu' }}</mat-icon>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isMenuOpen) {
        <div class="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a routerLink="/" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Home</a>
            <a routerLink="/services" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Services</a>
            <a routerLink="/how-it-works" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">How It Works</a>
            <a routerLink="/gallery" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Gallery</a>
            <a routerLink="/pricing" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Pricing</a>
            <a routerLink="/contact" (click)="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">Contact</a>
            <a href="https://wa.me/916304895538" target="_blank" class="block w-full text-center bg-brand-orange text-white px-3 py-3 rounded-md text-base font-bold mt-4">
              Order on WhatsApp
            </a>
          </div>
        </div>
      }
    </nav>
  `,
})
export class Navbar {
  isMenuOpen = false;
}

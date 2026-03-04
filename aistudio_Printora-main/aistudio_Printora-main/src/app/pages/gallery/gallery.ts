import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-black text-brand-black mb-6">Our Work Gallery</h1>
          <p class="text-xl text-gray-600">Take a look at some of the amazing custom prints we've created for our customers.</p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            (click)="filter = 'all'"
            [class.bg-brand-orange]="filter === 'all'"
            [class.text-white]="filter === 'all'"
            class="px-6 py-2 rounded-full font-bold border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
          >
            All
          </button>
          <button
            (click)="filter = 'tshirt'"
            [class.bg-brand-orange]="filter === 'tshirt'"
            [class.text-white]="filter === 'tshirt'"
            class="px-6 py-2 rounded-full font-bold border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
          >
            T-Shirts
          </button>
          <button
            (click)="filter = 'hoodie'"
            [class.bg-brand-orange]="filter === 'hoodie'"
            [class.text-white]="filter === 'hoodie'"
            class="px-6 py-2 rounded-full font-bold border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
          >
            Hoodies
          </button>
          <button
            (click)="filter = 'chocolate'"
            [class.bg-brand-orange]="filter === 'chocolate'"
            [class.text-white]="filter === 'chocolate'"
            class="px-6 py-2 rounded-full font-bold border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
          >
            Chocolates
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (item of filteredItems; track item.id) {
            <div class="group relative aspect-square overflow-hidden rounded-3xl shadow-lg animate-in fade-in zoom-in duration-500">
              <img
                [src]="item.image"
                [alt]="item.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerpolicy="no-referrer"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p class="text-brand-orange font-bold text-sm mb-1">{{ item.category | uppercase }}</p>
                <h3 class="text-white text-xl font-bold">{{ item.title }}</h3>
              </div>
            </div>
          }
        </div>

        <div class="mt-20 text-center">
          <p class="text-lg text-gray-600 mb-8">Want to see more? Follow us on social media or chat with us!</p>
          <a
            href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20saw%20your%20gallery%20and%20want%20to%20order%20something%20similar."
            target="_blank"
            class="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg"
          >
            <mat-icon>chat</mat-icon> Order Similar Design
          </a>
        </div>
      </div>
    </section>
  `,
})
export class Gallery {
  filter: 'all' | 'tshirt' | 'hoodie' | 'chocolate' = 'all';

  items = [
    { id: 1, category: 'tshirt', title: 'Custom Graphic T-Shirt', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80' },
    { id: 2, category: 'hoodie', title: 'Branded Corporate Hoodie', image: 'https://images.unsplash.com/photo-1578932750294-f50024257352?auto=format&fit=crop&w=600&q=80' },
    { id: 3, category: 'chocolate', title: 'Custom Birthday Wrappers', image: 'https://images.unsplash.com/photo-1549007994-cb92cfd7448d?auto=format&fit=crop&w=600&q=80' },
    { id: 4, category: 'tshirt', title: 'Event Special T-Shirt', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80' },
    { id: 5, category: 'chocolate', title: 'Personalized Gift Box', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80' },
    { id: 6, category: 'hoodie', title: 'Team Spirit Hoodie', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80' },
    { id: 7, category: 'tshirt', title: 'Logo Printed T-Shirt', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80' },
    { id: 8, category: 'chocolate', title: 'Wedding Favor Wrappers', image: 'https://images.unsplash.com/photo-1581333100576-b73bbe92c2cb?auto=format&fit=crop&w=600&q=80' },
    { id: 9, category: 'hoodie', title: 'Custom Printed Hoodie', image: 'https://images.unsplash.com/photo-1578932750294-f50024257352?auto=format&fit=crop&w=600&q=80' },
  ];

  get filteredItems() {
    if (this.filter === 'all') return this.items;
    return this.items.filter(item => item.category === this.filter);
  }
}

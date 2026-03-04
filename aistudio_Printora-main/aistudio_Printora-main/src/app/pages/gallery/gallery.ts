import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface GalleryItem {
  id: number;
  category: 'tshirt' | 'hoodie' | 'chocolate';
  title: string;
  image: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  filter: 'all' | 'tshirt' | 'hoodie' | 'chocolate' = 'all';

  items: GalleryItem[] = [
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

  get filteredItems(): GalleryItem[] {
    if (this.filter === 'all') return this.items;
    return this.items.filter(item => item.category === this.filter);
  }
}
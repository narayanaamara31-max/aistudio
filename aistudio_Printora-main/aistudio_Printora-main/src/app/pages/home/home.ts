import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-brand-yellow pt-20 pb-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-in fade-in slide-in-from-left-8 duration-700">
            <span class="inline-block bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
              #1 Custom Printing in India
            </span>
            <h1 class="text-5xl md:text-7xl font-display font-black text-brand-black leading-tight mb-6">
              Affordable Custom <span class="text-brand-orange">T-Shirt</span> & <span class="text-brand-orange">Chocolate</span> Wrapper Printing
            </h1>
            <p class="text-xl text-gray-800 mb-10 max-w-lg">
              Perfect for Birthdays, Weddings, Corporate Gifts & Festivals. Your Design. Your Style. Your Celebration.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20custom%20prints."
                target="_blank"
                class="bg-brand-orange text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <mat-icon>chat</mat-icon> Order on WhatsApp
              </a>
              <a
                routerLink="/services"
                class="bg-white text-brand-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 border-2 border-brand-black"
              >
                View Services
              </a>
            </div>
          </div>
          <div class="relative animate-in fade-in slide-in-from-right-8 duration-700">
            <img
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
              alt="Custom Printing Workshop"
              class="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              referrerpolicy="no-referrer"
            />
            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div class="bg-green-100 p-3 rounded-full">
                <mat-icon class="text-green-600">verified</mat-icon>
              </div>
              <div>
                <p class="font-bold text-brand-black">10,000+</p>
                <p class="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Decorative background elements -->
      <div class="absolute top-0 right-0 w-1/3 h-full bg-brand-orange opacity-10 -skew-x-12 transform translate-x-1/2"></div>
    </section>

    <!-- Trust Badges Section -->
    <section class="py-12 bg-white border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="flex flex-col items-center text-center group">
            <div class="bg-orange-50 p-4 rounded-2xl mb-4 group-hover:bg-brand-orange transition-colors">
              <mat-icon class="text-brand-orange group-hover:text-white">payments</mat-icon>
            </div>
            <p class="font-bold text-brand-black">Cash on Delivery</p>
            <p class="text-xs text-gray-500">Pay when you receive</p>
          </div>
          <div class="flex flex-col items-center text-center group">
            <div class="bg-orange-50 p-4 rounded-2xl mb-4 group-hover:bg-brand-orange transition-colors">
              <mat-icon class="text-brand-orange group-hover:text-white">inventory_2</mat-icon>
            </div>
            <p class="font-bold text-brand-black">Bulk Orders</p>
            <p class="text-xs text-gray-500">Best rates for events</p>
          </div>
          <div class="flex flex-col items-center text-center group">
            <div class="bg-orange-50 p-4 rounded-2xl mb-4 group-hover:bg-brand-orange transition-colors">
              <mat-icon class="text-brand-orange group-hover:text-white">local_shipping</mat-icon>
            </div>
            <p class="font-bold text-brand-black">Fast Delivery</p>
            <p class="text-xs text-gray-500">Across all India</p>
          </div>
          <div class="flex flex-col items-center text-center group">
            <div class="bg-orange-50 p-4 rounded-2xl mb-4 group-hover:bg-brand-orange transition-colors">
              <mat-icon class="text-brand-orange group-hover:text-white">favorite</mat-icon>
            </div>
            <p class="font-bold text-brand-black">Made in India</p>
            <p class="text-xs text-gray-500">Premium quality</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-black text-brand-black mb-4">Our Best Sellers</h2>
          <p class="text-gray-600">High quality printing at the most affordable prices</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- T-Shirts -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
            <div class="relative aspect-square overflow-hidden">
              <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80" alt="Custom Graphic T-Shirt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-bold">From ₹199</div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-2">Custom T-Shirts</h3>
              <p class="text-gray-600 mb-6">Premium cotton T-shirts with your custom design. Perfect for birthdays and events.</p>
              <a
                href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20Custom%20T-Shirts.%0AQuantity%3A%20___%0ADesign%20Details%3A%20I%20will%20attach%20my%20design%20image%20in%20chat."
                target="_blank"
                class="block w-full text-center bg-brand-black text-white py-3 rounded-xl font-bold hover:bg-brand-orange transition-colors"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <!-- Chocolate Wrappers -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
            <div class="relative aspect-square overflow-hidden">
              <img src="https://images.unsplash.com/photo-1549007994-cb92cfd7448d?auto=format&fit=crop&w=600&q=80" alt="Personalized Chocolate Wrappers" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-bold">From ₹20</div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-2">Personalized Chocolates</h3>
              <p class="text-gray-600 mb-6">Customized wrappers for weddings, birthdays, and corporate gifting.</p>
              <a
                href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20Personalized%20Chocolate%20Wrappers.%0AQuantity%3A%20___%0ADesign%20Details%3A%20I%20will%20attach%20my%20design%20image%20in%20chat."
                target="_blank"
                class="block w-full text-center bg-brand-black text-white py-3 rounded-xl font-bold hover:bg-brand-orange transition-colors"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <!-- Hoodies -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
            <div class="relative aspect-square overflow-hidden">
              <img src="https://images.unsplash.com/photo-1578932750294-f50024257352?auto=format&fit=crop&w=600&q=80" alt="Custom Branded Hoodies" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-bold">From ₹499</div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-2">Custom Hoodies</h3>
              <p class="text-gray-600 mb-6">Stay warm and stylish with custom printed hoodies. Great for college groups.</p>
              <a
                href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20Custom%20Hoodies.%0AQuantity%3A%20___%0ADesign%20Details%3A%20I%20will%20attach%20my%20design%20image%20in%20chat."
                target="_blank"
                class="block w-full text-center bg-brand-black text-white py-3 rounded-xl font-bold hover:bg-brand-orange transition-colors"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-brand-orange text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-8">Planning a Big Event?</h2>
        <p class="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Get special bulk discounts for weddings, corporate events, and parties. Contact us for an instant quote.</p>
        <a
          href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20get%20a%20free%20quote%20for%20a%20bulk%20order."
          target="_blank"
          class="inline-flex items-center gap-3 bg-white text-brand-orange px-10 py-5 rounded-full text-xl font-black hover:scale-105 transition-transform shadow-2xl"
        >
          <mat-icon>request_quote</mat-icon> Get Free Quote
        </a>
      </div>
    </section>
  `,
})
export class Home {}

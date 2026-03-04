import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-black text-brand-black mb-6">Affordable Pricing</h1>
          <p class="text-xl text-gray-600">Premium quality printing that fits your budget. Best prices for bulk orders!</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- T-Shirt Pricing -->
          <div class="bg-white rounded-3xl p-8 shadow-lg border-2 border-transparent hover:border-brand-orange transition-all">
            <div class="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <mat-icon class="text-brand-orange">checkroom</mat-icon>
            </div>
            <h3 class="text-2xl font-bold mb-2">Custom T-Shirts</h3>
            <p class="text-gray-500 mb-6">Starting at</p>
            <div class="flex items-baseline gap-1 mb-8">
              <span class="text-4xl font-black text-brand-black">₹199</span>
              <span class="text-gray-500">/ piece</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Premium Cotton Fabric
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> High Quality Print
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> All Sizes (S to XXL)
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Bulk Discounts
              </li>
            </ul>
            <a
              href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20Custom%20T-Shirts.%20Please%20share%20the%20price%20list."
              target="_blank"
              class="block w-full text-center bg-brand-black text-white py-4 rounded-xl font-bold hover:bg-brand-orange transition-colors"
            >
              Get Price List
            </a>
          </div>

          <!-- Chocolate Pricing -->
          <div class="bg-white rounded-3xl p-8 shadow-xl border-2 border-brand-orange relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-brand-orange text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">Popular</div>
            <div class="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <mat-icon class="text-brand-orange">cake</mat-icon>
            </div>
            <h3 class="text-2xl font-bold mb-2">Chocolate Wrappers</h3>
            <p class="text-gray-500 mb-6">Starting at</p>
            <div class="flex items-baseline gap-1 mb-8">
              <span class="text-4xl font-black text-brand-black">₹20</span>
              <span class="text-gray-500">/ piece</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Full Color Printing
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Glossy/Matte Finish
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Custom Themes
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Minimum Order: 10 pcs
              </li>
            </ul>
            <a
              href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20Custom%20Chocolate%20Wrappers.%20Please%20share%20the%20price%20list."
              target="_blank"
              class="block w-full text-center bg-brand-orange text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors"
            >
              Get Price List
            </a>
          </div>

          <!-- Hoodie Pricing -->
          <div class="bg-white rounded-3xl p-8 shadow-lg border-2 border-transparent hover:border-brand-orange transition-all">
            <div class="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <mat-icon class="text-brand-orange">dry_cleaning</mat-icon>
            </div>
            <h3 class="text-2xl font-bold mb-2">Custom Hoodies</h3>
            <p class="text-gray-500 mb-6">Starting at</p>
            <div class="flex items-baseline gap-1 mb-8">
              <span class="text-4xl font-black text-brand-black">₹499</span>
              <span class="text-gray-500">/ piece</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Heavy GSM Fabric
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Durable Prints
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Front & Back Printing
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-green-500 text-sm">check_circle</mat-icon> Best for College Groups
              </li>
            </ul>
            <a
              href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20Custom%20Hoodies.%20Please%20share%20the%20price%20list."
              target="_blank"
              class="block w-full text-center bg-brand-black text-white py-4 rounded-xl font-bold hover:bg-brand-orange transition-colors"
            >
              Get Price List
            </a>
          </div>
        </div>

        <div class="mt-16 bg-brand-black text-white p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 class="text-3xl font-black mb-2">Need a Bulk Quote?</h2>
            <p class="text-gray-400">Special pricing for orders above 50 pieces.</p>
          </div>
          <a
            href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20a%20bulk%20quote%20for%20an%20order%20of%20___%20pieces."
            target="_blank"
            class="bg-brand-orange text-white px-10 py-5 rounded-full text-xl font-black hover:scale-105 transition-transform"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  `,
})
export class Pricing {}

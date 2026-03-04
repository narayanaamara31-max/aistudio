import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <h1 class="text-5xl font-black text-brand-black mb-6">Our Printing Services</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">From individual gifts to massive corporate orders, we handle everything with care and precision.</p>
        </div>

        <div class="space-y-24">
          <!-- T-Shirts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <h2 class="text-4xl font-black text-brand-black mb-6">Custom T-Shirt Printing</h2>
              <p class="text-lg text-gray-600 mb-6">
                High-quality screen and digital printing on premium cotton T-shirts. Available in all sizes and colors. Perfect for birthdays, reunions, and team events.
              </p>
              <div class="bg-orange-50 p-6 rounded-2xl mb-8">
                <p class="text-2xl font-bold text-brand-orange mb-2">Starting at ₹199</p>
                <p class="text-brand-black font-medium flex items-center gap-2">
                  <mat-icon class="text-green-600">stars</mat-icon> Special Bulk Discounts Available!
                </p>
              </div>
              <a
                href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20Custom%20T-Shirts.%0AProduct%20Link%3A%20https%3A%2F%2Fprintoraindia.com%2Fservices%23tshirt%0AQuantity%3A%20___%0ADesign%20Details%3A%20I%20will%20attach%20my%20design%20image%20in%20chat."
                target="_blank"
                class="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg"
              >
                <mat-icon>chat</mat-icon> Order on WhatsApp
              </a>
            </div>
            <div class="order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80" alt="Printed T-Shirt Design" class="rounded-3xl shadow-xl" referrerpolicy="no-referrer" />
            </div>
          </div>

          <!-- Hoodies -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1578932750294-f50024257352?auto=format&fit=crop&w=800&q=80" alt="Custom Hoodie with Logo" class="rounded-3xl shadow-xl" referrerpolicy="no-referrer" />
            </div>
            <div>
              <h2 class="text-4xl font-black text-brand-black mb-6">Hoodie Printing</h2>
              <p class="text-lg text-gray-600 mb-6">
                Stay cozy with our custom printed hoodies. Thick, comfortable fabric with vibrant prints that don't fade. Ideal for college fests and winter events.
              </p>
              <div class="bg-orange-50 p-6 rounded-2xl mb-8">
                <p class="text-2xl font-bold text-brand-orange mb-2">Starting at ₹499</p>
                <p class="text-brand-black font-medium flex items-center gap-2">
                  <mat-icon class="text-green-600">stars</mat-icon> Best rates for bulk college orders!
                </p>
              </div>
              <a
                href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20Custom%20Hoodies.%0AProduct%20Link%3A%20https%3A%2F%2Fprintoraindia.com%2Fservices%23hoodie%0AQuantity%3A%20___%0ADesign%20Details%3A%20I%20will%20attach%20my%20design%20image%20in%20chat."
                target="_blank"
                class="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg"
              >
                <mat-icon>chat</mat-icon> Order on WhatsApp
              </a>
            </div>
          </div>

          <!-- Chocolate Wrappers -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <h2 class="text-4xl font-black text-brand-black mb-6">Personalized Chocolate Wrappers</h2>
              <p class="text-lg text-gray-600 mb-6">
                Add a sweet touch to your celebrations. Custom wrappers for standard chocolate bars or full personalized chocolate gift packs.
              </p>
              <div class="bg-orange-50 p-6 rounded-2xl mb-8">
                <p class="text-2xl font-bold text-brand-orange mb-2">Starting at ₹20 per piece</p>
                <p class="text-brand-black font-medium flex items-center gap-2">
                  <mat-icon class="text-green-600">stars</mat-icon> Perfect for Wedding & Birthday Favors!
                </p>
              </div>
              <a
                href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20order%20Personalized%20Chocolate%20Wrappers.%0AProduct%20Link%3A%20https%3A%2F%2Fprintoraindia.com%2Fservices%23chocolate%0AQuantity%3A%20___%0ADesign%20Details%3A%20I%20will%20attach%20my%20design%20image%20in%20chat."
                target="_blank"
                class="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg"
              >
                <mat-icon>chat</mat-icon> Order on WhatsApp
              </a>
            </div>
            <div class="order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1549007994-cb92cfd7448d?auto=format&fit=crop&w=800&q=80" alt="Custom Printed Chocolate Wrappers" class="rounded-3xl shadow-xl" referrerpolicy="no-referrer" />
            </div>
          </div>

          <!-- Corporate & Events -->
          <div class="bg-brand-black text-white rounded-[3rem] p-12 md:p-20 text-center">
            <h2 class="text-4xl font-black mb-8">Bulk Corporate & Event Printing</h2>
            <p class="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              We specialize in large scale printing for corporate branding, weddings, and festivals. Get consistent quality and on-time delivery for your big days.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div class="bg-white/5 p-8 rounded-3xl border border-white/10">
                <mat-icon class="text-brand-orange text-4xl mb-4">business</mat-icon>
                <h3 class="text-xl font-bold mb-2">Corporate</h3>
                <p class="text-sm text-gray-500">Uniforms, events, and branding kits.</p>
              </div>
              <div class="bg-white/5 p-8 rounded-3xl border border-white/10">
                <mat-icon class="text-brand-orange text-4xl mb-4">celebration</mat-icon>
                <h3 class="text-xl font-bold mb-2">Weddings</h3>
                <p class="text-sm text-gray-500">Personalized gifts and favors.</p>
              </div>
              <div class="bg-white/5 p-8 rounded-3xl border border-white/10">
                <mat-icon class="text-brand-orange text-4xl mb-4">groups</mat-icon>
                <h3 class="text-xl font-bold mb-2">Festivals</h3>
                <p class="text-sm text-gray-500">Bulk T-shirts for groups and NGOs.</p>
              </div>
            </div>
            <a
              href="https://wa.me/916304895538?text=Hello%20Printora%20India%2C%20I%20want%20to%20discuss%20a%20Bulk%20Corporate%20Order."
              target="_blank"
              class="inline-flex items-center gap-2 bg-brand-orange text-white px-10 py-5 rounded-full text-xl font-black hover:scale-105 transition-transform"
            >
              <mat-icon>chat</mat-icon> Discuss Bulk Order
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Services {}

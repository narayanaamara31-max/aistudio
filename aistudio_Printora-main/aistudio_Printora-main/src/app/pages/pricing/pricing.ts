import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {}

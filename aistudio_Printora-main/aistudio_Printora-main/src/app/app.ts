import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {Footer} from './components/footer/footer';
import {WhatsAppButton} from './components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, WhatsAppButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

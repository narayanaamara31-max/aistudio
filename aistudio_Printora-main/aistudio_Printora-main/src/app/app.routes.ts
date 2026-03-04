import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {Services} from './pages/services/services';
import {HowItWorks} from './pages/how-it-works/how-it-works';
import {Gallery} from './pages/gallery/gallery';
import {Pricing} from './pages/pricing/pricing';
import {Contact} from './pages/contact/contact';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'services', component: Services},
  {path: 'how-it-works', component: HowItWorks},
  {path: 'gallery', component: Gallery},
  {path: 'pricing', component: Pricing},
  {path: 'contact', component: Contact},
  {path: '**', redirectTo: ''},
];

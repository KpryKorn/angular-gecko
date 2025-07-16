import { Routes } from '@angular/router';
import { TrackerPageComponent } from './components/pages/tracker-page/tracker-page.component';
import { CryptoDetailPageComponent } from './components/pages/crypto-detail-page/crypto-detail-page.component';

export const routes: Routes = [
  {
    path: 'tracker',
    component: TrackerPageComponent,
  },
  {
    path: 'details/:id',
    component: CryptoDetailPageComponent,
  },
  {
    path: '**',
    redirectTo: 'tracker',
  },
];

import { Routes } from '@angular/router';
import { Landingpage } from './components/landingpage/landingpage';
import { LegalNotice } from './components/legal-notice/legal-notice';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: Landingpage },
  { path: 'legal-notice', component: LegalNotice },
  { path: 'privacy-policy', component: PrivacyPolicy },
];
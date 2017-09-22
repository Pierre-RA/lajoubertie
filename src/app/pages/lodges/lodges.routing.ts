import { Routes, RouterModule } from '@angular/router';

import { LodgesComponent } from './lodges.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: LodgesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

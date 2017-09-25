import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

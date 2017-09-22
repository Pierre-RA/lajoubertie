import { Routes, RouterModule } from '@angular/router';

import { RoomsComponent } from './rooms.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: RoomsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

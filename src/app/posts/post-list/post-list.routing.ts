import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

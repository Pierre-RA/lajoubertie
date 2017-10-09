import { Routes, RouterModule } from '@angular/router';

import { PostSingleComponent } from './post-single.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: PostSingleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

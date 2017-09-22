import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/pages/welcome/welcome.module#WelcomeModule', pathMatch: 'full' },
  { path: 'contact', loadChildren: 'app/pages/contact/contact.module#ContactModule', pathMatch: 'full' },
  { path: 'rooms', loadChildren: 'app/pages/rooms/rooms.module#RoomsModule', pathMatch: 'full' },
  { path: 'lodges', loadChildren: 'app/pages/lodges/lodges.module#LodgesModule', pathMatch: 'full' },
  { path: 'not-found', loadChildren: 'app/pages/notfound/notfound.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }

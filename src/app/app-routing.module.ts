import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user-registration', loadChildren: () => import('./features/user-registration/user-registration.module').then(m => m.UserRegistrationModule) },
  { path: '', redirectTo: 'user-registration', pathMatch: 'full' },
  { path: '', redirectTo: 'user-registration' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

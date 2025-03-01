import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration.component';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRegistrationRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class UserRegistrationModule{}

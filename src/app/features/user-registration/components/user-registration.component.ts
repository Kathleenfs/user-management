import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userForm!: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), ValidationService.fullNameValidator]],
      email: ['', [Validators.required, Validators.email, ValidationService.emailValidator]],
      phone: ['', [Validators.required, ValidationService.phoneValidator]],
      birthDate: ['', [Validators.required, ValidationService.birthDateValidator]],
      userType: ['', [Validators.required]]
    });
  }


  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser);
      console.log('Usuário cadastrado:', newUser);

      this.showSuccessMessage = true;
    }
  }

  closeSuccessMessage(): void {
    this.showSuccessMessage = false;
    this.userForm.reset();
  }
}

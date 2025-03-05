import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {

  static fullNameValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;

    if (!value) return null;

    const containsNumbers = /\d/.test(value);
    if (containsNumbers) {
      return { invalidName: true };
    }

    const sanitizedValue = value.replace(/\s+/g, '');

    if (sanitizedValue.trim().length === 0) {
      return { invalidName: true };
    }

    const exceedsMaxLength = sanitizedValue.length > 40;
    const hasOnlyRepeatingCharacters = /^([a-zA-ZÀ-ÿ\u00f1\u00d1])\1*$/.test(sanitizedValue);

    if (exceedsMaxLength || hasOnlyRepeatingCharacters) {
      return { invalidName: true };
    }

    return null;
  }


  static emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    const exceedsMaxLength = value.length > 40;

    if (!emailRegex.test(value) || exceedsMaxLength) {
      return { invalidEmail: true };
    }

    return null;
  }

  static phoneValidator(control: AbstractControl): ValidationErrors | null {
    let value = control.value;
    if (!value) return null;

    const numericValue = value.replace(/\D/g, '');
    if (numericValue !== value) {
      control.setValue(numericValue);
    }

    if (numericValue.length !== 11) {
      return { invalidPhone: true };
    }

    if (/^(\d)\1{10}$/.test(numericValue)) {
      return { invalidPhone: true };
    }

    return null;
  }

  static birthDateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

    const birthDate = new Date(value);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (birthDate > today) {
      return { invalidBirthDate: true };
    }

    return null;
  }

}

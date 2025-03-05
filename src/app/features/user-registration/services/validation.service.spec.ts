import { ValidationService } from './validation.service';
import { FormControl } from '@angular/forms';

describe('ValidationService', () => {

  it('deve validar nomes corretamente', () => {
    expect(ValidationService.fullNameValidator(new FormControl('John Doe'))).toBeNull();
    expect(ValidationService.fullNameValidator(new FormControl('1111'))).toEqual({ invalidName: true });
    expect(ValidationService.fullNameValidator(new FormControl('AAAAAAAAAA'))).toEqual({ invalidName: true });
    expect(ValidationService.fullNameValidator(new FormControl('UmNomeMuitoGrandeQueExcedeOLimiteDeCaracteres'))).toEqual({ invalidName: true });
  });

  it('deve validar e-mails corretamente', () => {
    expect(ValidationService.emailValidator(new FormControl('email@teste.com'))).toBeNull();
    expect(ValidationService.emailValidator(new FormControl('email@teste'))).toEqual({ invalidEmail: true });
    expect(ValidationService.emailValidator(new FormControl('email@.com'))).toEqual({ invalidEmail: true });
    expect(ValidationService.emailValidator(new FormControl('a'.repeat(41) + '@teste.com'))).toEqual({ invalidEmail: true });
  });

  it('deve validar telefones corretamente', () => {
    expect(ValidationService.phoneValidator(new FormControl('11987654321'))).toBeNull();
    expect(ValidationService.phoneValidator(new FormControl('1234567'))).toEqual({ invalidPhone: true });
    expect(ValidationService.phoneValidator(new FormControl('123456789101112'))).toEqual({ invalidPhone: true });
    expect(ValidationService.phoneValidator(new FormControl('11111111111'))).toEqual({ invalidPhone: true });
  });

  it('deve validar datas de nascimento corretamente', () => {
    expect(ValidationService.birthDateValidator(new FormControl('01-01-2001'))).toBeNull();
    expect(ValidationService.birthDateValidator(new FormControl(new Date(Date.now() + 86400000)))).toEqual({ invalidBirthDate: true });
  });

});

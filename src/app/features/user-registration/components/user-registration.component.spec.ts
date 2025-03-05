import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationComponent } from './user-registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistrationComponent],
      imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule,
        MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, NoopAnimationsModule],
      providers: [UserService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve criar o formulário com os campos necessários', () => {
    const form = component.userForm;
    expect(form.contains('fullName')).toBeTruthy();
    expect(form.contains('email')).toBeTruthy();
    expect(form.contains('phone')).toBeTruthy();
    expect(form.contains('birthDate')).toBeTruthy();
    expect(form.contains('userType')).toBeTruthy();
  });

  it('deve validar o formulário como um todo', () => {
    const form = component.userForm;

    form.setValue({
      fullName: '',
      email: '',
      phone: '',
      birthDate: '',
      userType: ''
    });
    expect(form.valid).toBeFalsy();

    form.setValue({
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '11987654321',
      birthDate: '2001-01-01',
      userType: 'Visualizador'
    });
    expect(form.valid).toBeTruthy();
  });

  it('deve chamar userService.addUser ao submeter um formulário válido', () => {
    jest.spyOn(userService, 'addUser');

    component.userForm.setValue({
      fullName: 'Test User',
      email: 'test.user@example.com',
      phone: '11987654321',
      birthDate: '2001-01-01',
      userType: 'Admin'
    });

    component.onSubmit();

    expect(userService.addUser).toHaveBeenCalled();
    expect(component.showSuccessMessage).toBe(true);
  });

  it('deve exibir mensagem de sucesso ao cadastrar usuário válido', () => {

    component.userForm.setValue({
      fullName: 'Test User',
      email: 'test.user@example.com',
      phone: '11987654321',
      birthDate: '2001-01-01',
      userType: 'Visualizador'
    });

    component.onSubmit();

    expect(component.showSuccessMessage).toBe(true);
  });

  it('deve resetar o formulário e esconder a mensagem ao fechar o alerta de sucesso', () => {
    component.showSuccessMessage = true;
    jest.spyOn(component.userForm, 'reset');

    component.closeSuccessMessage();

    expect(component.showSuccessMessage).toBe(false);
    expect(component.userForm.reset).toHaveBeenCalled();
  });
});

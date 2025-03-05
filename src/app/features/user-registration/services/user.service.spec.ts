import { UserService } from './user.service';
import { User } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve adicionar um usuário corretamente', () => {
    const user: User = {
      fullName: 'Teste Usuário',
      email: 'teste@email.com',
      phone: '11987654321',
      birthDate: new Date('01-01-2001'),
      userType: 'Visualizador'
    };

    service.addUser(user);
    expect(service.getUsers()).toContain(user);
  });

  it('deve retornar uma lista vazia quando nenhum usuário for adicionado', () => {
    expect(service.getUsers().length).toBe(0);
  });
});

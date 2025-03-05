
## Estrutura do Projeto
O projeto segue uma organização modular para facilitar a manutenção e escalabilidade:
```plaintext
              user-registration/                 # Módulo principal para gerenciamento de usuários
              ├── components/                    # Componentes do módulo
              │   ├── user-registration.component.ts       # Lógica do componente principal
              │   ├── user-registration.component.html     # Template do componente principal
              │   ├── user-registration.component.spec.ts  # Testes unitários do componente principal
              │   ├── user-registration.component.scss     # Estilos do componente principal
              │
              ├── services/                      # Serviços do módulo
              │   ├── user.service.ts            # Lógica para gerenciar usuários (mock do backend)
              │   ├── user.service.spec.ts       # Testes unitários para o UserService
              │   ├── validation.service.ts      # Serviço de validações customizadas
              │   ├── validation.service.spec.ts # Testes unitários para o ValidationService
              │
              ├── models/                        # Modelos de dados usados no módulo
              │   ├── user.model.ts              # Modelo de dados para representar um usuário
              │
              ├── user-registration.module.ts    # Declarações e importações do módulo
              ├── user-registration-routing.module.ts # Configuração de rotas para o módulo
```


---

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
2. **Instale as Dependências**:
   ```bash
    npm install

3. **Execute o projeto**:
   ```bash
    ng serve
## Como Executar os Testes

### Executar todos os testes com cobertura:
```bash
npm test -- --coverage
```

## Cobertura de Testes

| Tipo           | Cobertura |
|----------------|-----------|
| Statements     | 97.43%    |
| Branches       | 88.23%   |
| Functions      | 100%      |
| Lines          | 96.92%    |

🏆 Este projeto alcança **90%** de cobertura de testes unitários.


# GYM CALC - Aproveite o melhor da matemática e fique saudável

## Sobre o Backend

O backend do GYMCALC foi desenvolvido utilizando o framework **NestJS** com **TypeScript**, garantindo uma estrutura modular, escalável e de fácil manutenção. Ele é responsável por processar os cálculos necessários para atender às funcionalidades da aplicação e gerenciar os dados dos usuários.

### Funcionalidades Principais
- **Cálculo da Taxa Metabólica Basal (TMB)**: Determina a quantidade de calorias que o corpo consome em repouso.
- **Cálculo do Gasto Calórico Diário Total (TDEE)**: Baseado na TMB e no nível de atividade física do usuário.
- **Cálculo de Macronutrientes**: Divide as calorias diárias em proteínas, carboidratos e gorduras, de acordo com os objetivos do usuário.
- **Progressão de Carga**: Utiliza expressões algébricas para calcular a progressão ideal de carga nos treinos, considerando variáveis como 1RM (Repetição Máxima) e fadiga.

### Tecnologias Utilizadas
- **NestJS**: Framework backend para construção de APIs robustas.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, aumentando a confiabilidade do código.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar perfis e histórico dos usuários.
- **Prisma**: ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados.
- **Math.js**: Biblioteca para realizar cálculos matemáticos complexos, incluindo expressões algébricas.

### Estrutura do Backend
- **Módulos**: O backend é organizado em módulos que separam as responsabilidades, como `users`, `nutrition`, e `training`.
- **Endpoints**: APIs RESTful que permitem a comunicação entre o frontend e o backend.
- **Validação**: Uso de validações para garantir a integridade dos dados enviados pelos usuários.

### Como Executar o Backend
1. Certifique-se de ter o **Node.js** e o **PostgreSQL** instalados.
2. Clone o repositório:
```bash
  git clone https://github.com/seu-usuario/gym-calc.git
```
3. Navegue até a pasta do backend:
```bash
  cd gym-calc/backend
  ```
4. Instale as dependências:
```bash 
npm install
```
5. Configure as variáveis de ambiente no arquivo `.env` (exemplo disponível em `.env.example`).
6. Execute as migrações do banco de dados:
```bash
npx prisma migrate dev
```
7. Inicie o servidor:
```bash
npm run start:dev
```

O backend estará disponível em `http://localhost:3000`.

### Próximos Passos
- Implementar autenticação e autorização para maior segurança.
- Adicionar mais endpoints para funcionalidades futuras.
- Melhorar a documentação da API com ferramentas como Swagger.

*Contribua com o projeto e ajude a tornar o GYMCALC ainda melhor!*
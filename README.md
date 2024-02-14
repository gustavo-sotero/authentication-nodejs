# Authentication-NodeJS

Este projeto, `authentication-nodejs`, é uma API de autenticação construída utilizando TypeScript, Koa, Prisma e JWT (JSON Web Token). Tem como finalidade principal servir como um projeto pessoal para aprender e praticar mais sobre programação, autenticação e as tecnologias envolvidas.

## 🚀 Começando

Estas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

O que você precisa para instalar o software e como instalá-los:

- Node.js (versão recomendada: 18.x ou superior)
- npm ou yarn
- Um banco de dados suportado pelo Prisma (PostgreSQL, MySQL, SQLite, etc.)

### 🔧 Instalação

Um passo a passo que informa o que você deve executar para ter um ambiente de desenvolvimento rodando:

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/authentication-nodejs.git
cd authentication-nodejs
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

Copie o arquivo `.env.example` para `.env` e ajuste as variáveis conforme necessário.

4. **Execute as migrações do Prisma**

```bash
npx prisma migrate dev
```

5. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

O servidor estará acessível em `http://localhost:3000`.

## 🛠️ Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
authentication-nodejs/
├───prisma/
│   ├───schema.prisma        # Define o modelo de dados
│   └───migrations/          # Contém as migrações do banco de dados
└───src/
    ├───controllers/
    │   └───v1/              # Controladores para as rotas da API
    ├───middlewares/         # Middlewares do Koa, incluindo autenticação JWT
    ├───models/              # (Opcional) Modelos de dados se não estiver usando Prisma diretamente
    ├───routes/
    │   └───v1/              # Definições de rotas da API
    ├───services/            # Serviços para lógica de negócios e interação com o banco de dados
    ├───utils/               # Funções utilitárias, como geradores de token JWT
    └───__tests__/           # Testes para os componentes da aplicação
```

- **`prisma/`**: Contém o esquema do Prisma e as migrações para o banco de dados.
- **`src/`**: Código fonte da aplicação, organizado por funcionalidade.

## 📦 Desenvolvimento

Este projeto é uma oportunidade para explorar conceitos de autenticação, segurança e desenvolvimento backend com tecnologias modernas. Sinta-se à vontade para experimentar, modificar e expandir o projeto conforme sua curiosidade e necessidades de aprendizado.

## ✒️ Autor

- **Gustavo Sotero** - _Desenvolvedor Full Stack_ - [gustavo-sotero](https://github.com/gustavo-sotero)

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## 🎁 Expressões de Gratidão

- Comente a outros sobre este projeto 📢
- Convide alguém da equipe para uma cerveja 🍺 ou um café ☕
- Obrigado publicamente 🤓.

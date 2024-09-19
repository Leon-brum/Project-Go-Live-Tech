# Go Live Tech Project

Este projeto é dividido em duas partes principais: **Backend** e **Frontend**. Abaixo estão as instruções para configurar e executar cada uma das partes.

## Sumário

1. [Pré-requisitos](#pré-requisitos)
2. [Instalação](#instalação)
   - [Backend](#backend)
   - [Frontend](#frontend)
3. [Execução](#execução)
   - [Backend](#executando-o-backend)
   - [Frontend](#executando-o-frontend)
4. [Comandos Úteis](#comandos-úteis)

---

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:

- **Node.js** (versão 14 ou superior)
- **Docker** (incluindo Docker Compose)
- **npm** ou **yarn**

---

## Instalação

### Backend

1. Acesse o diretório do backend:

    ```bash
    cd backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Compile o código TypeScript:

    ```bash
    npm run build
    ```

    ou, se preferir:

    ```bash
    npx tsc
    ```

4. Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`:

    ```bash
    cp .env.example .env
    ```

5. Construa e inicie os containers Docker:

    ```bash
    docker-compose up --build
    ```

6. Certifique-se de que a porta configurada está disponível.

7. Dentro do container, execute o seguinte comando para configurar o banco de dados (migrações e seeds):

    ```bash
    docker exec -it go-live-backend npm run db:reset
    ```

---

### Frontend

1. Acesse o diretório do frontend:

    ```bash
    cd frontend/my-app
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Construa e inicie os containers Docker:

    ```bash
    docker-compose up --build
    ```

4. Após o container estar ativo, acesse o frontend no navegador na porta `3001` (verifique se a porta está livre).

---

## Execução

### Executando o Backend

1. Verifique se as dependências estão instaladas e o `.env` está configurado.
2. Use o Docker para levantar o ambiente:

    ```bash
    docker-compose up --build
    ```

3. Execute o comando para configurar o banco de dados:

    ```bash
    docker exec -it go-live-backend npm run db:reset
    ```

---

### Executando o Frontend

1. Verifique se as dependências estão instaladas no diretório `frontend/my-app`.
2. Levante o ambiente com Docker:

    ```bash
    docker-compose up --build
    ```

3. Acesse a aplicação no navegador pela porta `3001`.

---

## Comandos Úteis

- **Compilar o TypeScript do backend**:

    ```bash
    npm run build
    ```

- **Subir containers Docker**:

    ```bash
    docker-compose up --build
    ```

- **Resetar o banco de dados (migrações e seeds)**:

    ```bash
    docker exec -it go-live-backend npm run db:reset
    ```

---

# 🏝️ PortLouis-PS

Projeto desenvolvido como parte de um teste técnico. A aplicação é construída com **Node.js**, **Express** e **MySQL**, e fornece endpoints para gerenciamento de contatos e verificação da saúde da aplicação.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (versão 18+ recomendada)
- [MySQL](https://dev.mysql.com/downloads/)

---

## 🧭 Como configurar o projeto

### Clonar o repositório
```bash
git clone https://github.com/pixies0/PortLouis-PS.git
cd PortLouis-PS
```

## Executando o Backend

### 1️⃣ Instalar as dependências
```bash
cd backend/
npm install
```

### 2️⃣ Configurar o banco de dados

Com Auxílio de um SGBD (Usei o DBeaver, no meu caso) execute **um comando por vez** do script SQL que está no arquivo *schema.sql*.

```SQL
CREATE DATABASE IF NOT EXISTS contatos_db CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

USE contatos_db;

CREATE TABLE IF NOT EXISTS contatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  telefone VARCHAR(14) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contatos_nome ON contatos(nome);
```

Agora com o banco de dados preparado, pode-se *settar* um arquivo .env

### 3️⃣ Configurar variaveis de ambiente.

```bash
cp .env.example .env
```
```bash
# Porta do servidor
PORT=3000

# Configuração do banco de dados MySQL
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco_de_dados
DB_PORT=3306
```
### ▶️ Rodando o servidor

Dentro do diretório ```backend```, execute ```npm run dev``` e verá...

```bash
API ouvindo em http://localhost:3000
```

Se tudo estiver configurado certo... as seguintes rotas devem retornar 200 com uma mensagem positiva.

| Método   | Rota            | Descrição                               |
| -------- | --------------- | --------------------------------------- |
| `GET`    | `/saude/servidor`       | Verifica a saúde do servidor            |
| `GET`    | `/saude/database`    | Verifica a conexão com o banco de dados |

## Domínio Contatos

Teste os endpoints inline via terminal se quiser.

### POST ```/contatos```

Cria um novo contato.

```bash
curl -s -X POST http://localhost:3000/contatos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Scooby Doo","telefone":"(11) 1234-5678"}'
```

### GET ```/contatos/:id```

Retorna a lista completa de contatos cadastrados.


```bash
curl -s http://localhost:3000/contatos
```

### PATCH ```/contatos/:id```

Atualiza os dados de um contato existente.

```bash
curl -s -X PATCH http://localhost:3000/contatos/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"Scooby Doo","telefone":"(63) 3333-4444"}'
```

### DELETE ```/contatos/:id```

Remove um contato do banco de dados com base no ID informado.

```bash
curl -i -X DELETE http://localhost:3000/contatos/1
```

## Executando frontend

Apenas abra o arquivo ```frontend/index.html``` no navegador simultâneamente ao servidor .

## 🧠 Dicas

* Certifique-se de que o serviço MySQL está em execução.

* Caso ocorra erro de conexão, revise as variáveis no arquivo .env.

* O servidor conta com um serviço de logs, portanto quaisquer erros ou eventos importantes serão exibidos diretamente no console do servidor — verifique-o para diagnóstico detalhado.
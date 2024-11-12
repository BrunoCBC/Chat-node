# 💬 Chat-node

**Chat-node** é um sistema de chat em tempo real construído com **Node.js** e **Socket.IO**, permitindo que os usuários se conectem instantaneamente em salas de bate-papo. A comunicação é feita de forma eficiente e em tempo real utilizando WebSockets, enquanto o frontend é simples, sem uso de frameworks, feito apenas com **HTML**, **CSS** e **JavaScript**.

## 🛠️ **Pré-requisitos**

Antes de rodar o projeto, verifique se as seguintes ferramentas estão instaladas na sua máquina:

- **Node.js**: [Baixe aqui](https://nodejs.org/)
- **npm**: O npm (Node Package Manager) é instalado automaticamente com o Node.js.

### 📦 Verifique se o Node.js e o npm estão instalados corretamente:

- **node -v** (para verificar a versão do Node.js)
- **npm -v** (para verificar a versão do npm)

Se ambos os comandos retornarem as versões corretamente, então tudo está pronto!

---

## 📜 **Passo a Passo**

### 1️⃣ **Clonar o Repositório**

Primeiro, clone o repositório para a sua máquina local com o comando:

`git clone https://github.com/BrunoCBC/Chat-node.git`

### 2️⃣ **Entrar no Diretório do Projeto**

Entre no diretório do projeto com o comando:

`cd chat-app`

### 3️⃣ **Instalar Dependências**

O projeto utiliza **Node.js** e **npm** para gerenciar dependências. Para instalar as dependências necessárias, execute:

`npm install`

### 4️⃣ **Rodar o Servidor**

Após a instalação das dependências, inicie o servidor com o comando:

`node server.js`

O servidor será iniciado na porta **3000**, e você verá a seguinte mensagem no terminal:

`Servidor rodando na porta 3000`

### 5️⃣ **Acessar a Aplicação**

Abra o seu navegador e acesse o endereço:

`http://localhost:3000`

A interface de chat será carregada, e você poderá:

- **Entrar em uma sala**: Escolha o nome da sala e o nome de usuário, e clique em "Entrar na Sala".
- **Enviar mensagens**: Após entrar na sala, envie mensagens que serão transmitidas instantaneamente para todos os usuários na mesma sala.
- **Sair da sala**: Quando desejar, clique em "Sair da Sala" para retornar à tela de seleção.

### 6️⃣ **Parar o Servidor**

Quando terminar, pare o servidor pressionando **Ctrl + C** no terminal.

---

## 🚀 **Destaques do Projeto**

- **Salas de Chat**: Permite aos usuários criar e entrar em salas privadas, onde podem interagir apenas com os participantes dessa sala.
- **Comunicação em Tempo Real**: A comunicação é feita em tempo real usando **Socket.IO**, garantindo uma experiência fluida e instantânea.
- **Frontend Simples e Funcional**: O frontend foi desenvolvido com **HTML**, **CSS** e **JavaScript**, sem a utilização de frameworks, para garantir uma estrutura leve e funcional.

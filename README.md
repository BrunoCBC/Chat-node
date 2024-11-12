Chat-node
Este é um sistema de chat em tempo real utilizando Node.js e Socket.IO, onde os usuários podem entrar em diferentes salas de bate-papo e se comunicar instantaneamente. A comunicação é feita em tempo real usando WebSockets, e o frontend é simples, sem uso de frameworks, apenas com HTML, CSS e JavaScript.

Pré-requisitos
Antes de rodar o projeto, você precisará ter as seguintes ferramentas instaladas na sua máquina:

Node.js - Você pode baixar o Node.js aqui.

npm - O npm (Node Package Manager) é instalado automaticamente com o Node.js. Para verificar se o Node.js e o npm estão instalados corretamente, execute os seguintes comandos no terminal:

node -v
npm -v
Se as versões forem retornadas, significa que o Node.js e o npm estão instalados corretamente.

Passo a Passo
1. Clonar o Repositório
Clone o repositório para sua máquina local com o comando:

git clone https://github.com/BrunoCBC/Chat-node.git

2. Entrar no Diretório do Projeto
Entre no diretório do projeto com o comando:

cd chat-app

3. Instalar Dependências
O projeto utiliza Node.js e npm para gerenciar dependências. Para instalar as dependências necessárias, execute o seguinte comando:

npm install

4. Rodar o Servidor
Após instalar as dependências, inicie o servidor com o comando:

node server.js

O servidor será iniciado na porta 3000. Você verá a seguinte mensagem no terminal:

Servidor rodando na porta 3000

5. Acessar a Aplicação
Abra o seu navegador e acesse o endereço:

http://localhost:3000

A interface de chat será carregada. Você pode:

Entrar em uma sala: Escolha um nome de sala e um nome de usuário, e clique em "Entrar na Sala".
Enviar mensagens: Depois de entrar na sala, você poderá enviar mensagens que serão transmitidas em tempo real para todos os usuários na mesma sala.
Sair da sala: Quando desejar, clique em "Sair da Sala" para voltar à tela inicial de seleção.
6. Parar o Servidor
Quando terminar, você pode parar o servidor pressionando Ctrl + C no terminal.

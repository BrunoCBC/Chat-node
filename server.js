const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public')); // Serve arquivos estáticos

// Armazena as salas e os usuários nelas
let rooms = {};

// Função para formatar data e hora
function formatDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses começam do 0
    const year = now.getFullYear();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// Conexão WebSocket
io.on('connection', (socket) => {
    console.log('Novo usuário conectado');

    // Usuário entra em uma sala
    socket.on('joinRoom', (roomName, username) => {
        // Adiciona o usuário à sala
        if (!rooms[roomName]) {
            rooms[roomName] = [];
        }
        rooms[roomName].push({ socketId: socket.id, username });

        // Usuário entra na sala
        socket.join(roomName);
        console.log(`${username} entrou na sala ${roomName}`);

        // Notifica a sala que o usuário entrou
        io.to(roomName).emit('message', {
            message: `${username} entrou na sala`,
            sender: 'Sistema',
            time: formatDateTime()
        });

        // Envia a lista de usuários da sala para o novo usuário
        io.to(socket.id).emit('roomUsers', rooms[roomName]);
    });

    // Enviar mensagem para a sala
    socket.on('chatMessage', (roomName, message, username) => {
        const time = formatDateTime();
        const messageData = {
            message,
            sender: username,
            time
        };
        io.to(roomName).emit('message', messageData); // Envia a mensagem com o remetente e a hora
    });

    // Usuário sai da sala
    socket.on('leaveRoom', (roomName, username) => {
        socket.leave(roomName);
        rooms[roomName] = rooms[roomName].filter(user => user.socketId !== socket.id);
        io.to(roomName).emit('message', {
            message: `${username} saiu da sala`,
            sender: 'Sistema',
            time: formatDateTime()
        });
    });

    // Desconectar
    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });
});

// Iniciar o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

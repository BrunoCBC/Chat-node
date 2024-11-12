const socket = io();

// DOM Elements
const roomSelection = document.getElementById('room-selection');
const chatRoom = document.getElementById('chat-room');
const roomNameInput = document.getElementById('room-name');
const usernameInput = document.getElementById('username');
const enterRoomButton = document.getElementById('enter-room');
const sendMessageButton = document.getElementById('send-message');
const leaveRoomButton = document.getElementById('leave-room');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');
const roomNameDisplay = document.getElementById('room-name-display');

// Variables
let currentRoom = '';
let username = '';

// Função para formatar a data e hora
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

// Entrar na sala
enterRoomButton.addEventListener('click', () => {
    const roomName = roomNameInput.value;
    username = usernameInput.value;

    if (roomName && username) {
        socket.emit('joinRoom', roomName, username);
        currentRoom = roomName;
        roomSelection.style.display = 'none';
        chatRoom.style.display = 'block';
        roomNameDisplay.textContent = roomName;
    }
});

// Enviar mensagem
sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        socket.emit('chatMessage', currentRoom, message, username);
        messageInput.value = ''; // Limpa o campo de mensagem
        messageInput.focus(); // Foca novamente no campo de mensagem
    }
});

// Sair da sala
leaveRoomButton.addEventListener('click', () => {
    socket.emit('leaveRoom', currentRoom, username);
    roomSelection.style.display = 'block';
    chatRoom.style.display = 'none';
    messagesContainer.innerHTML = ''; // Limpa as mensagens
    currentRoom = '';
});

// Receber mensagens
socket.on('message', (data) => {
    const { message, sender, time } = data;
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    // Verifica se a mensagem foi do próprio usuário
    const isUserMessage = sender === username;
    messageElement.classList.add(isUserMessage ? 'message-user' : 'message-other');

    // Adiciona a mensagem
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageElement.appendChild(messageText);

    // Adiciona a data/hora
    const messageTime = document.createElement('div');
    messageTime.classList.add('message-time');
    messageTime.textContent = time;
    messageElement.appendChild(messageTime);

    // Adiciona a mensagem à área de mensagens
    messagesContainer.appendChild(messageElement);

    // Rolagem automática para a última mensagem
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

// Atualizar lista de usuários da sala (se necessário)
socket.on('roomUsers', (users) => {
    // Aqui você pode atualizar a lista de usuários, se necessário.
});

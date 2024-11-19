const socket = io();
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

let currentRoom = '';
let username = '';

function formatDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

enterRoomButton.addEventListener('click', () => {
    const roomName = roomNameInput.value.trim();
    username = usernameInput.value.trim();
    if (roomName && username) {
        socket.emit('joinRoom', roomName, username);
        currentRoom = roomName;
        roomSelection.style.display = 'none';
        chatRoom.style.display = 'block';
        roomNameDisplay.textContent = roomName;
    }
});

sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chatMessage', currentRoom, message, username);
        messageInput.value = '';
        messageInput.focus();
    }
});

leaveRoomButton.addEventListener('click', () => {
    socket.emit('leaveRoom', currentRoom, username);
    roomSelection.style.display = 'block';
    chatRoom.style.display = 'none';
    messagesContainer.innerHTML = '';
    currentRoom = '';
});

socket.on('message', ({ message, sender, time }) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === username ? 'message-user' : 'message-other');
    
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageElement.appendChild(messageText);
    
    const messageTime = document.createElement('div');
    messageTime.classList.add('message-time');
    messageTime.textContent = time;
    messageElement.appendChild(messageTime);
    
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

socket.on('roomUsers', users => {
    // Aqui você pode atualizar a lista de usuários, se necessário.
});

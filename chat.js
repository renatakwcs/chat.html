const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#send-button');
const chatBody = document.querySelector('#chat-body');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message !== '') {
        appendMessage('outgoing', message);
        messageInput.value = '';
        setTimeout(() => {
            const response = 'Desculpe, não entendi sua mensagem.';
            appendMessage('incoming', response);
        }, 1000);
    }
});

function appendMessage(type, message) {
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message', type);
    chatMessage.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(chatMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
}


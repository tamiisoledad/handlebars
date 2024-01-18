const socket = io()
const messageInput = document.getElementById('messageInput');
const sendMessagesButton = document.getElementById('sendMessagesButton')
const messagesContainer = document.getElementById('messagesContainer')

sendMessagesButton.addEventListener('click', () => {
    const inputText = messageInput.value;
    socket.emit('message', inputText);
    messageInput.value = '';
})

socket.on('messages', (mensajes) => {
    const mensajesHTML = mensajes.map((mensaje) => {
        return `<p>${mensaje.socketId}: ${mensaje.mensaje}</p>`
    }).join('')

    messagesContainer.innerHTML = mensajesHTML
})

// socket.emit('message', 'Hola me estoy comunicando desde un websocket')


socket.on('evento_para_socket_individual', data => console.log(data))

socket.on('evento_para_todos_menos_el_socket_actual', data => console.log(data))

socket.on('evento_para_todos', data => console.log(data));
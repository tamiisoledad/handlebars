import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from './routes/views.router.js';
import { Server } from "socket.io";

const app = express();
const httpServer = app.listen(8080, () =>
  console.log("Server running in port 8080")
);
const socketServer = new Server(httpServer);

app.use(express.urlencoded({ extended: true }))

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.use('/', viewsRouter)

const mensajes = [];

socketServer.on('connection', socket => {
  console.log('Nuevo cliente conectado')

  socket.on('message', data => {
    mensajes.push({socketId: socket.id, mensaje: data})
    socketServer.emit('message', data)
    socketServer.emit('messages', mensajes)
  })

  socket.emit('messages', mensajes);

  socket.emit('evento_para_socket_individual', 'Este mensaje solo lo debe recibir el socket actual')

  socket.broadcast.emit('evento_para_todos_menos_el_socket_actual', 'Se conecto otro cliente')

  socketServer.emit('evento_para_todos', 'Este evento esta siendo escuchado por todos');
})
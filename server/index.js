const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { wsEngine: "ws" });

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

io.on("connection", (socket) => {
	socket.on('join', ({ name, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });

		if (error) return callback(error);

		// Welcoming message for user
		socket.emit('message', {
			user: 'admin',
			text: `${user.name}, welcome to room ${user.room}`
		});

		// notifying other users when current user have joined the room
		socket.broadcast.to(user.room).emit('message', { 
			user: 'admin', text: `${user.name} has joined`
		});

		socket.join(user.room);

		callback();
	});

	// Waiting on events for user generated messages
	socket.on('sendMessage', (message, callback) => {
		const user = getUser(socket.id);

		const hour = new Date().getHours();
		const minute = new Date().getMinutes();

		io.to(user.room).emit("message", {
			user: user.name,
			text: message,
			time: `${hour}:${minute}`
		});

		callback();
	})

	socket.on("disconnect", () => {
		console.log("User has been disconnected");
	});
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

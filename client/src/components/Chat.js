import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import ChatInfo from './ChatInfo';
import Messages from './Messages';
import MessageInput from './MessageInput';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const ENDPOINT = "https://immense-inlet-49896.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      };
    });
    
    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [location.search, ENDPOINT]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([ ...messages, message ]);
    })
  }, [messages]);

  useEffect(() => {
    socket.on('roomInfo', ({ room, users }) => {
      setUsers(users);
    })
  }, [users]);

  function sendMessage(e) {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
		<div className="container-fluid min-vh-100">
			<ChatInfo {...{ name, room, users }} />
			<Messages {...{ messages, name }} />
			<MessageInput {...{ message, sendMessage, setMessage }} />
		</div>
	);
}

export default Chat

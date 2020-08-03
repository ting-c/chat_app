import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);
    console.log(room)

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

  function sendMessage(e) {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(message, messages);

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={(e) => sendMessage(e)}>
          <input value={message} onChange={(e) => setMessage(e.target.value)} />
        </form>
      </div>
    </div>
  )
}

export default Chat

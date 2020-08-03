import React, { useRef, useEffect } from 'react';
import Message from "./Message";

const Messages = ({ messages, name }) => {
	const messagesEnd = useRef(null);

	function scrollToBottom() {
		messagesEnd.current.scrollIntoView({ behaviour: "smooth" })
	}

	useEffect(() => scrollToBottom(), [messages]);
  
  return (
		<div
			className="row bg-light d-flex flex-column p-2"
			style={{
				minHeight: "80vh",
				width: "100vw",
				maxWidth: "100vw",
				overflowY: "scroll",
				flexDirection: "column",
			}}
		>
      {messages.map((message, idx) => (
        <Message {...{ message, name }} key={idx} />
      ))}
			<div className="row bg-light" ref={messagesEnd} style={{ minHeight: "10vh" }} />
		</div>
	);
}

export default Messages

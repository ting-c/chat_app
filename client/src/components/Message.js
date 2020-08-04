import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message, name }) => {
	const messageBlockClass =
		message.user === "admin" ? "w-auto" : "w-100";

	let messageClass;
	switch (message.user) {
		case "admin":
			messageClass = "mx-auto bg-light text-center";
			break;
		case name:
			messageClass = "float-left";
			break;
		default:
			messageClass = "float-right";
	}

	let messageUserName;
	switch (message.user) {
		case "admin":
			messageUserName = null;
			break;
		case name:
			messageUserName = "You";
			break;
		default:
			messageUserName = message.user;
	}

	return (
		<div className={`my-2 ${messageBlockClass}`} style={{height: 'auto'}}>
			<div
				className={`card py-1 shadow-sm ${messageClass}`}
				style={{ wordBreak: "break-word", maxWidth: "60%", minWidth: '30%', borderRadius: '0.8rem' }}
			>
				<div className="card-body p-0 pt-1 px-3">
					<div
						className="card-title border-0 p-0 font-weight-bold"
						style={{ backgroundColor: "white" }}
					>
						{messageUserName}
					</div>
					<div className="card-text p-0">
						<p>{ReactEmoji.emojify(message.text)}</p>
						<small className="text-muted p-0">{message.time}</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message

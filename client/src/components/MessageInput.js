import React from 'react'

const MessageInput = ({ message, sendMessage, setMessage }) => {
  return (
		<form onSubmit={(e) => sendMessage(e)}>
			<div
				className="row fixed-bottom mx-0 bg-light"
				style={{ height: "10vh", opacity: "0.95" }}
			>
				<div className="col-9 p-2">
					<input
						className="form-control input"
            placeholder='Enter a message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						style={{
							width: "100%",
							height: "100%",
							borderRadius: "1.3rem"
						}}
					/>
				</div>
				<div className="col-3 p-2">
					<button
						className="btn btn-info"
						style={{ width: "100%", height: "100%", borderRadius: "1.2rem" }}
					>
						Send
					</button>
				</div>
			</div>
		</form>
	);
}

export default MessageInput

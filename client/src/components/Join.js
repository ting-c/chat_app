import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chatIcon from '../icons/chatIcon.png';

const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

function capitializeString(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

	return (
		<div className="container shadow-sm d-flex flex-column">
			<div className="row d-flex flex-column p-3">
				<img className="mx-auto mb-3" src={chatIcon} alt="chat icon" style={{height: '5rem', width: '5rem'}}/>
				<div>
					<input
						placeholder="Name"
						className="form-control mb-3"
						type="text"
						onChange={(e) => setName(capitializeString(e.target.value))}
					/>
				</div>
				<div>
					<input
						placeholder="Room"
						className="form-control mb-3"
						type="text"
						onChange={(e) => setRoom(e.target.value)}
					/>
				</div>
				<div>
					<Link
						to={`/chat?name=${name}&room=${room}`}
						onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					>
						<button className="btn btn-info" type="submit">
							Join
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Join;

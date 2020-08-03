import React from 'react';
import { Link } from 'react-router-dom';

const ChatInfo = ({ name, room }) => {
  return (
		<div
			className="row sticky-top p-2 bg-success text-light shadow-sm"
			style={{ height: "10vh", width: "100vw" }}
		>
			<table className="col-5" style={{ height: "80%", margin: "auto 0" }}>
				<tbody>
					<tr>
						<th>User :</th>
						<td>{name}</td>
					</tr>
					<tr>
						<th>Room :</th>
						<td>{room}</td>
					</tr>
				</tbody>
			</table>
			<div className="col-4" />
			<button
				className="col-3 btn float-right"
				style={{ height: "80%", margin: "auto 0" }}
			>
				<Link to="/">
					<img
						src={"https://img.icons8.com/metro/26/000000/exit.png"}
						alt="exit icon"
					/>
				</Link>
			</button>
		</div>
	);
}

export default ChatInfo

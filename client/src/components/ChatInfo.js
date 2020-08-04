import React from 'react';
import { Link } from 'react-router-dom';

const ChatInfo = ({ name, room, users }) => {
  
  return (
		<div
			className="row sticky-top p-2 bg-info text-light shadow-sm"
			style={{ height: "10vh", width: "100vw" }}
		>
			<table className="col-6" style={{ height: "80%", margin: "auto 0" }}>
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

			<div className="col-3 dropdown my-auto">
				<button
					className="btn text-light dropdown-toggle"
					id="dropdownMenu"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Users
				</button>

				<ul className="dropdown-menu" aria-labelledby="dropdownMenu">
					{users.map((user, idx) => (
						<li className="dropdown-item" key={idx}>
							{user.name}
						</li>
					))}
				</ul>
			</div>

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

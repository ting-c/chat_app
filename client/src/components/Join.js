import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
		<div className="container shadow-sm d-flex flex-column">
			<div className="row d-flex flex-column p-3">
				<h3 className="text-center">Join</h3>
				<div>
					<input
						placeholder="Name"
						className="form-control mb-3"
						type="text"
						onChange={(e) => setName(e.target.value)}
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
}

export default Join;

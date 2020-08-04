## General info
A chat app that uses React on the client side and connect to the server written in Node.

### Features 
- User can choose a username and enter the room to join the chat.
- Messages displays the names of other users when entering and leaving the chat.
- Supports the use of emojis.

	
## Technologies
The app is created with:
* React - v 16.13.1
* Node - v 12.18.0
	
## Setup
To run this project, install it locally by running `npm install`:

### Deployment

The client side of the app is hosted on Firebase Hosting using the Firebase CLI deploy. Documentation can be found [here](https://firebase.google.com/docs/hosting/quickstart).
The server side is hosted on Heroku.

### Development mode

* Client Side /React
Go to client/components/Chat.js and change the variable `ENDPOINT` to "http://localhost:5000" so the socketIO client connects to the correct endpoint during development.
`cd client` and then run `npm start` to run the app in the development on "http://localhost:3000".

* Server Side / Node
`cd server` on the command line then run `npm start`
The server will run on "http://localhost:5000".



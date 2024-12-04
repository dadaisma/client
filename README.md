# Chat App

This is a real-time chat application built using Next.js for the client and Express with Socket.IO for the server. The app allows users to send and receive messages instantly and see when other users are typing.

## Features

- Real-time messaging
- User typing indicators
- Image upload and display
- User-friendly interface

## Technologies Used

- Next.js
- Socket.IO
- Express
- Tailwind CSS

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/dadaisma/client.git
   git clone https://github.com/dadaisma/serverchat.git
   cd chat-app

2. Install dependencies for both client and server:
npm install
cd server
npm install

Running the Application

1. Start the server:
cd server
node server.js

2. Start the client:
cd ..
npm run dev

3. Open your browser and navigate to http://localhost:3000.

Client
The client is built using Next.js and React. It includes the following components:

Chat: Displays the chat messages and typing indicators.
Inputs: Handles message input and image upload.
SignUp: Manages user sign-up and authentication.
Key Files
pages/index.js: The main entry point for the client application.
components/Chat.js: The chat interface component.
components/Inputs.js: The input field and image upload component.
components/SignUp.js: The user sign-up component.
components/Message.js: The component responsible for rendering individual chat messages, including text and images, with appropriate styling based on whether the message is sent by the current user or another user.
Server
The server is built using Express and Socket.IO. It handles real-time communication between clients.

Key Files
server/server.js: The main server file that sets up the Express server and Socket.IO.
Server Events
connection: Triggered when a new client connects.
client_ready: Triggered when the client is ready.
send_message: Handles sending messages between clients.
user_typing: Handles user typing indicators.
btn_clicked: Handles button click events.

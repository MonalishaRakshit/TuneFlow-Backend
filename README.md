# TuneFlow-Backend 🎵

A Spotify-inspired backend application built with Node.js, Express.js, and MongoDB. This project provides REST APIs for user authentication, music management, playlists, and other streaming platform features.

## 🚀 Features

- User Registration & Login
- JWT Authentication & Authorization
- Password Hashing with bcrypt
- MongoDB Database Integration
- RESTful API Architecture
- Modular Project Structure
- Playlist Management
- Music Management APIs

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- dotenv

## 📂 Project Structure

```text
TuneFlow-Backend/
│
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── services/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/MonalishaRakshit/TuneFlow-Backend.git
```

### Move into the Project Directory

```bash
cd TuneFlow-Backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the Development Server

```bash
npm run dev
```

### Start the Production Server

```bash
npm start
```

## 📡 API Modules

- Authentication
- Users
- Songs
- Albums
- Playlists
- Artists

## 🔒 Security

- JWT-based Authentication
- Password Encryption using bcrypt
- Environment Variables for Sensitive Data

## 🌱 Future Enhancements

- Audio Streaming
- Song Uploads
- Search Functionality
- Likes & Favorites
- Recently Played Songs
- Recommendation System

## 👩‍💻 Author

**Monalisha Rakshit**

GitHub: https://github.com/MonalishaRakshit

## 📜 License

This project is created for learning and educational purposes.

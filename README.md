# 🎵 Music Backend API (Spotify-like)

A scalable backend for a music platform where users can listen to songs and artists can upload music and create albums.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- JWT-based authentication
- HTTP-only cookie storage
- Password hashing with bcrypt
- Role-based access control (User vs Artist)

### 🎧 Music Management

- Artist-only music upload
- File handling using Multer
- Cloud storage using ImageKit
- Each song linked to its artist

### 💿 Album Management

- Artist-only album creation
- Albums linked to artists
- Fetch album details by ID

### 🌍 Public APIs

- Fetch all published songs
- MongoDB `.populate()` for artist details
- Pagination using `page` and `limit`

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- Multer (File Upload)
- ImageKit (Cloud Storage)
- Cookie-parser

---

## 📁 Folder Structure

```
src/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── services/
 ├── utils/
 └── app.js
```

---

## 🔗 API Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Music

- `POST /api/music/upload` (Artist only)
- `GET /api/music` (Public, paginated)

### Albums

- `POST /api/albums` (Artist only)
- `GET /api/albums/:id`

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-link>
cd music-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret

IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
```

4. Run the server:

```bash
npm run dev
```

---

## 🧠 Key Learnings

- Implemented secure authentication using JWT & cookies
- Designed role-based access system (User vs Artist)
- Integrated file uploads with Multer and ImageKit
- Used MongoDB relationships with `.populate()`
- Built scalable and clean backend architecture

---

---

## 📸 API Testing (Postman)

### 🔐 Login API

![Login](./images/login-api.png)

---

### 👨‍🎤 Artist-only Route

![Artist Only](./images/artist-only.png)

---

### 🎵 Music Upload (Multer + ImageKit)

![Music Upload](./images/music-upload.png)

---

### 🌍 Public Songs API (Populate + Pagination)

![Public Songs](./images/public-songs.png)

## 📌 Future Improvements

- Add song-to-album linking
- Add cover image upload
- Add update/delete APIs
- Add validation middleware
- Add refresh token authentication

---

## 👨‍💻 Author

**Muneeb Bhatti**
BS Computer Science Graduate
Aspiring Backend Developer 🚀

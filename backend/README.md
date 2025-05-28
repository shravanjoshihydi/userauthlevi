# Authentication and Comment Permission Service

## Setup

1. Install dependencies:
```
npm install
```

2. Create `.env` file with:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

3. Start the server:
```
npm run dev
```

## Routes

- POST /api/auth/signup
- POST /api/auth/login
- POST /api/auth/token
- POST /api/auth/logout
- GET /api/comments
- POST /api/comments
- DELETE /api/comments/:id
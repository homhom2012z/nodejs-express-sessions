# Nodejs-Auth-Sessions

Node.js session management using Express.js and Express-Session

### **Stack used:**

Backend

- MongoDB(Mongoose with MongoDB atlas)
- Node.js with Express

Client

- [Next.js](https://nextjs.org/), [Chakra-UI](https://chakra-ui.com/) and [Formik](https://formik.org/)

### **Core dependencies:**

- express-session
- connect-mongodb-session
- bcryptjs
- cors

## Getting Started

First, run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result for backend.<br/>
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result for client.

Or, you can run a bash file to start the development server directly (start.sh)

## Configuration

Provide your MongoDB URI in .env file in backend:

```bash
MONG_URI="YOUR_MONGO_DB_URI"
```

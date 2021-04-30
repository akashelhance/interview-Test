const path = require('path');
const express= require('express')
const dotenv = require('dotenv');

const connectDB = require('./config/db');

const authroutes= require('./routes/auth')
const privateroutes= require('./routes/private')

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database

connectDB();
const app = express()


//Body parser- To read the data from the user:

app.use(express.json());

// Mouting the users:

app.use('/api/auth/', authroutes)
app.use('/api/private/', privateroutes)

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
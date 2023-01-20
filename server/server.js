const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const store = require('session-file-store');
require('dotenv').config();
const cors = require('cors');
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);

const FileStore = store(session);
const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'bassdassmass',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => console.log(`Own Game Port ${PORT}`));

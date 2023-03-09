const express = require('express');

const app = express();
const PORT = 3000;
const server = require('http').Server(app);
const io = require('socket.io')(server);

// controller import
const auth = require('./middleware/auth');

app.use(express.json());

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.post('/login', auth.login, (req, res, next) => {
  console.log(req.body);
  if (res.locals.authData.code !== 200) {
    return next({
      log: res.locals.authData.message,
      message: res.locals.authData.data.message,
    });
  }
  return res.status(200).json({ message: 'Login successful' });
});

app.post('/signup', auth.signup, (req, res, next) => {
  console.log(res.locals.record);
  return res.status(200).json({ message: 'Signup successful' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

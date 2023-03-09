import path from 'path';
import { createServer } from 'http';
import express from 'express';
import { Server } from 'socket.io';

// invoke express server
const app = express();
// create a server
const server = createServer(app);
// attach the server to socketio
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// auth
app.post('/auth', (req, res) => res.status(200).send('auth'));

// rouge endpoint catcher
app.use((req, res) => {
  res.status(404).send('404: Page not Found');
});

app.use((err, req, res) => {
  // err template
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = { ...defaultErr, ...err };

  // log error
  console.error(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});

// start server
io.listen(3000);

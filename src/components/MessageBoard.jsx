import React from 'react';
import { Socket } from 'socket.io';
import Board from './Board';
import '../styles/MessageBoard.scss';

function MessageBoard() {
  return (
    <div id="content">
      <div id="shoutouts" />
      <div id="form-container">
        <form>
          <input type="text" placeholder="Shoutout!" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default MessageBoard;

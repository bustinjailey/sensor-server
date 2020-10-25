'use strict';

import express from 'express';
import path from 'path';
import { createServer } from 'http';
import WebSocket from 'ws';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { SessionMap } from './src/session/index.js';
import { v4 as uuidv4 } from 'uuid';
import getDataForClient from './src/data-access/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static(path.join(__dirname, '../sensor-frontend/')));

const server = createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function (ws) {
  ws.uuid = uuidv4();
  SessionMap.set(ws.uuid, {}); // placeholder for settings from client
  const id = setInterval(function () {
    ws.send(JSON.stringify(getDataForClient(ws.uuid)), function () {
      //
      // Ignore errors.
      //
    });
  }, 100);
  console.log('started client interval');

  ws.on('close', function () {
    SessionMap.delete(ws.uuid);
    console.log('stopping client interval');
    clearInterval(id);
  });

  ws.on('message', function incoming(data) {
    console.log('Received message from client: ' + data);
    let dataObj = JSON.parse(data);
    switch (dataObj.type) {
      case 'CLIENT_OPTIONS':
        let session = SessionMap.get(ws.uuid)
        session.clientOptions = dataObj.payload;
        console.log(SessionMap.get(ws.uuid));
    }
  });
});

server.listen(8080, function () {
  console.log('Listening on http://localhost:8080');
});
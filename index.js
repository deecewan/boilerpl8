// add node sourcemaps for compiled files.
import 'source-map-support/register';

// import node native dependencies
import http from 'http';

// import express server
import app from './server';

// serve the application
const server = http.createServer(app);
server.listen(3000, 'localhost', err => {
  if (err) {
    console.error(err);
  }
  const addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});

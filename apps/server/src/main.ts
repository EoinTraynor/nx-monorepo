/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { Reservation } from '@nx-monorepo/reservations';
const app = express();

app.get('/api', (req, res) => {
  const reservation: Reservation = req.body;
  res.send({ message: reservation });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

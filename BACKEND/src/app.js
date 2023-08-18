import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connect } from './utils/database.connnection';

const app = express();
const PORT = process.env.PORT || '8070';

app.use(cors());
app.use(express.json({ limit: '20mb' }));

app.get('/', (req, res, next) => {
  res.send('<h2> 🏥 Dental Clinic Management System API</h2>');
  next();
});

const nomelticketRouter = require("./api/routes/ticket.js");

app.use("/nomelticket",nomelticketRouter);

const worrentTicketRouter = require("./api/routes/worrent.js");

app.use("/worrentTicket",worrentTicketRouter);



const server = app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
  connect();
});

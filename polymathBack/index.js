require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbconnetion } = require('./config/dbConnect');
const app = express();
app.use( cors() );
// // middware for read and parse from body

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', require('./app/routes'))
dbconnetion();

app.listen(process.env.PORT, () => {
  console.log(
    'Listening Server of port: \x1b[32m%s\x1b[0m',
    process.env.PORT
  );
});
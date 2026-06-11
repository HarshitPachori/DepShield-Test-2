const express = require('express');
const { mysqlConn } = require('./src/db');
const { sendEmail } = require('./src/mail');
const apiRouter = require('./src/api');

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

mysqlConn.connect((err) => {
  if (err) console.error('MySQL connection failed:', err);
  else console.log('MySQL connected');
});

app.listen(3000, () => console.log('Server running on port 3000'));
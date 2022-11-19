const express = require('express');
const cors = require('cors');
const saveUserRouter =require('./routes/saveUserRouter');
const getUserRouter = require('./routes/getUserRouter');

const app = express();
app.use(express.json())

app.listen(3001, () => { console.log('Listening.....') });
app.use(cors());

app.use('/api/saveUser',saveUserRouter);
app.use('/api/getUser',getUserRouter);

module.exports = app;
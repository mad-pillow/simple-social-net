const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));

async function init() {
  try {
    await mongoose.connect(config.get('mongoDbUri'));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

init();

const PORT = config.get('port') || 5000;

app.listen(5000, () =>
  console.log(`Server has been successfully started on port ${PORT}...`)
);

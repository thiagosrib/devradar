const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-5iuzz.mongodb.net/omnistaci10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())


app.use('/', require('./RouterPost'))

app.listen(1200);


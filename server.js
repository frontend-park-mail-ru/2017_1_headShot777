const express = require('express');
const app = express();

const BASE_PATH = 'static';
app.use('/', express.static(BASE_PATH));

const port = 5100;
console.log("Port " + port + " OK");

app.listen(port);
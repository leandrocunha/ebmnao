const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const STATIC_PATH = path.join(__dirname, 'dist');

const app = express();

app.use(express.static(STATIC_PATH));
app.use(bodyParser.json());

app.get('*', (req, res) => res.sendFile(`${STATIC_PATH}/index.html`));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

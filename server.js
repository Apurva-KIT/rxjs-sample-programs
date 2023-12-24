var express = require("express");
var api = require("connect-api-mocker");

var app = express();

const PORT = process.env.MOCKS_PORT || 8080;
app.use(api('/mock'));

const cors = require('cors');
app.use(cors({
    origin: 'https:/localhost:4200'
}));

app.listen(8080, () => console.log(`Listening on http://localhost:${PORT}/api`));
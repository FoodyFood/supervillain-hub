// The basics  we need
const path = require("path");
//fs = require('fs');


// Express.js
const express = require('express');
const session = require('express-session');
const website = express();
const site = path.join(__dirname, 'site');


// Links to the files that make up our website
website.use('/', express.static(path.join(__dirname, "site")));


// Start the listener
website.listen(8080, () => console.log('Express.js listening on http://localhost:8080') );
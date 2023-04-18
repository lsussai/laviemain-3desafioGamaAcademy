
const express = require("express");
const routers = require('./routers/index');

const app = express ();

app.use(express.json());
app.use(routers);


module.exports = app;  

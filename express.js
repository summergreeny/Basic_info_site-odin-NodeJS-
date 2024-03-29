const express = require("express");
const app = express(); //create an Express application, it has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying response objects.

const port = 8000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/404.html");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

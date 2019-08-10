const express = require("express");

const app = express();

//routess

app.get("/", (res, r) => {
  r.send("Node js loaded");
});

app.listen("8000");

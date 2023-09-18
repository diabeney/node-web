const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/random/:min/:max", (req, res) => {
  const min = parseInt(req.params.min);
  const max = parseInt(req.params.max);

  if (isNaN(min) || isNaN(max)) {
    res.status(400);
    res.json({ error: "Bad Request" });
    return;
  }

  const result = Math.round(Math.random() * (max - min) + min);
  res.json({ result: result });
});

app.get("/bookings/:id", (req, res) => {
  const bookingId = req.params.id;
  res.json({
    request: "This is a dummy data",
    response: {
      status: 200,
      results: bookingId,
    },
  });
});

app.listen(3000, () => {
  console.log("app started on port 3000");
});

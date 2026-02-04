const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Priyank", role: "student" },
  { id: 2, name: "Neel sir", role: "mentor" },
  { id: 3, name: "Prashant", role: "baccha" }
];

app.get("/", (req, res) => {
  res.send("Server start ho chuka hai!!!!");
});

app.get("/users/test/:users_id", (req, res) => {
    console.log("This is req", req);
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});


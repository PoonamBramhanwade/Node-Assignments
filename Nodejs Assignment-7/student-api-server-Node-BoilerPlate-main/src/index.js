const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/api/student", async (req, res) => {
    res.json(student);
  });
  
  app.get("/api/student/:id", async (req, res) => {
    const id = req.params.id;
    const user = student.filter((data) => data.id == id);
    if (user.length != 0) {
      res.status(200).json(user);
    } else {
      res.json("user not found");
    }
  });
  
  app.put("/api/student/:id", async (req, res) => {
    student.map((data) => {
      if (data.id == req.params.id) {
        data.name = req.body.name;
        res.json({ name: req.body.name });
      } else {
        res.status(400).json({
          message: "Invalid Request",
        });
      }
    });
  });
  
  app.delete("/api/student/:id", async (req, res) => {
    for (let i = 0; i < student.length; i++) {
      if (student[i].id == req.params.id) {
        student.splice(i, 1);
        res.send('Deleted')
      } else {
        return res.status(400).send("Bad Request")
      }
    }
  });
  
  app.post("/api/student", async (req, res) => {
    if (
      req.body.name != undefined &&
      req.body.currentClass != undefined &&
      req.body.division != undefined
    ) {
      let id = Date.now();
      student.push({
        id: id,
        name: req.body.name,
        currentClass: req.body.currentClass,
        division: req.body.division,
      });
      res.status(200).json({
        id: id,
        name: req.body.name,
        currentClass: req.body.currentClass,
        division: req.body.division,
      });
    } else {
      res.status(400).send("not updated");
    }
  });

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   
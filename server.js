//Import Dependencies
const express = require("express");
const cors = require("cors");

//Import JSON files
//This is a list of the projects and a bio
const projects = require("./projects.json");
const about = require("./about.json");

//create app object
const app = express();

//Setup middleware - use cors
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

//route for retrieving projects
app.get("/projects", (req, res) => {
  //send projects via JSON
  res.json(projects);
});

//route for retrieving about info
app.get("/about", (req, res) => {
  //send about via JSON
  res.json(about);
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

//listener
app.listen(PORT, () => {
  console.log(`listening on port...${PORT}`);
});
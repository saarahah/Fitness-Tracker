// Create a Routes folder and create two files:
// -   htmlRoutes.js:
//     - Create all the routes to display pages (View)
//     - You will need html routes to display the following pages:
//         - index.html ( "/" )
//         - exercise.html ( "/exercise" )
//         - stats.html ( "/stats" )

const path = require("path");
const htmlRouter = require("express").Router();


htmlRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  htmlRouter.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  htmlRouter.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  module.exports = htmlRouter;
const express = require ("express");
const logger = require ("morgan");
const mongoose = require ("mongoose");
const htmlRouter = require("./routes/htmlRoutes.js");
const apiRouter = require("./routes/apiRoutes.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout",{
    useNewUrlParser: true,
    // useUnifiedTopology: true,  
    useFindAndModify: false
});

//routes
app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`)
});

const express = require("express");
const userRouter = require("./routes/userRouter");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log("username will be logged here - wip");
    res.send("HI")
})

app.use("/new", userRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
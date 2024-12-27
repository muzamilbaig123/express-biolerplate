import express from "express";
const app = express();
import homepage from "./routes/index.js"

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("./public"))

app.use((req, res, next) => {
    next()
})


app.use("/", homepage);


app.listen(port)

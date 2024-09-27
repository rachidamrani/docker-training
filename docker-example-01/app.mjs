import express from "express";
import { Person, connectToDatabase } from "./helpers.mjs";

const app = express();

app.get("/", (req, res) => {
    const person = new Person("John", 30);

    person.getName();

    res.send("<h2>Hi " + person.getName() + " !</h2>");
});


await connectToDatabase();


app.listen(3000, () => {
    console.log("Server started on port 3000");
});
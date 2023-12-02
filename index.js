const express = require("express");
const cors = require("cors")
const studentRouter = require('./routes/studentRoutes')
const certRouter = require('./routes/certifcateroutes')
const db = require("./Connection/Database")


const app = new express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());




app.get('/', (request, response) => {
    response.send("hi database")
})

app.use("/student", studentRouter)

app.use("/certificate", certRouter)


app.listen(4005, (request, response) => {
    console.log("Port is running in 4005")
})
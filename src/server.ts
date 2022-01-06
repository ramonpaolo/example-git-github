import homeRoute from "./routes/home"
import express from "express"

const app = express()

app.use(homeRoute)

app.listen(3000)
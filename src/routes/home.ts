import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send({
        name: "Ramon Paolo Maran"
    })
})

export default app;
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 4000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.post("/add", (req, res) => {
    let one = req.body.num1
    let two = req.body.num2
    let sum = one + two
    if (typeof (one) === "string" || typeof (two) === "string") {
        res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    if(sum>100000){
        res.status(400).json({
            status: "error",
            message: "Overflow" 
        })
    } 
    else{
        res.status(200).json({
            status: "success",
            message: "sum of Two no.s",
            sum: one + two
        })
    }

})

//sub
app.post("/sub", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    if (typeof (num1) === "string" || typeof (num2) === "string") {
        res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    } else {
        res.status(200).json({
            status: "success",
            message: "substraction of two no.s",
            sub: num1 - num2
        })
    }
})

app.post("/divide", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    if (num2 >= 1000000 || num1 >= 1000000 ) {
        res.status(400).json({
            status: "error",
            message: "Overflow"
        })

    } if (num2 <= (-1000000) || num1 <= (-1000000)) {
        res.status(400).json({
            status: "error",
            message: "Underflow"
        })
    } if (num2 == 0) {
        res.status(400).json({
            status: "error",
            message: "Cannot divide by zero"
        })
    } if (typeof (num1) === "string" || typeof (num2) === "string") {
        res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    } else {
        res.status(200).json({
            status: "success",
            message: "div of Two no.s",
            div: num1 / num2
        })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
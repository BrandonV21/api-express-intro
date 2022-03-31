//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())

// //set up routes in our API.
// app.get("/", (req, res) => {
//     console.log("got request!")
//     res.send("Hello!")
//    })

//set up routes in our API. respond json
app.get("/", (req, res) => {
    console.log("got request!")
    res.json({msg: 'hello!'})
   })

// // add another route
// app.get("/bye", (req, res) => {
//   res.send({msg: 'goodbye!'})
// })

app.delete("/bye", (req, res) => {
    res.send({msg: 'goodbye forever!'})
})

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})

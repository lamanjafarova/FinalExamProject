const express = require('express');
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { Schema } = mongoose
const port = 8080
app.use(cors())
app.use(bodyParser.json())
const bussinesSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
})
const Bussiness = mongoose.model("swan", bussinesSchema)
app.get("/swan", (req, res) => {
    Bussiness.find({}, (err, docs) => {
        if(!err){
            res.send(docs)
        } else {
            res.status(500).json({message: "Not Found"})
        }
    })
})
app.get("/swan/:id", (req, res) => {
    const { id } = req.params
    Bussiness.findById(id, (err, docs) => {
        if(!err){
            res.send(docs)
        } else {
            res.status(500).json({message: "Not Found"})
        }
    })
})

app.delete("/swan/:id", (req, res) => {
    const { id } = req.params
    Bussiness.findByIdAndDelete(id, (err, docs) => {
        if(!err){
            res.send(docs)
        } else {
            res.status(500).json({message: "Not Found"})
        }
    })
})
app.post("/swan", (req, res) => {
    let newSwan = new Bussiness({
        name: req.body.name,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    })
    newSwan.save()
    res.send({message: "Post"})
})

mongoose.connect(
    "mongodb+srv://lemanjaffar:lemanjaffar@cluster0.o26j4pn.mongodb.net/?retryWrites=true&w=majority",
    err => {
        if(!err){
            console.log("DB CONNECT");
            app.listen(port, () => {
                console.log(`http://localhost:${port}`);
            })
        }
    }
)
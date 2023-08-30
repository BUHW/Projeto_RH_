const express = require('express')
const app = express()

app.get("/formulario", function(req, res){
    res.sendFile(__dirname + '/index.html')
})
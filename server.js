const fs = require('fs');
const express = require('express')

const app = express();
const port = 3000;

app.use(express.json())

//Read route
app.get('/todo', (req, res) => {
    res.json("Needs to be implemented")
});

//Create route
app.post('/todo', (req, res) => {
    res.json("Needs to be implemented")
});

//Update route
app.put('/todo/:id', (req, res) => {
    res.json("Needs to be implemented")
});

//Delete route
app.delete('/todo/:id', (req, res) => {
    res.json("Needs to be implemented")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
const fs = require('fs');
const express = require('express')

const app = express();
const port = 3000;



const users = [
    {id: 1, name: 'Kami'},
    {id: 2, name: 'Hami'},
]

const products = [
    {id: 1, name: 'Phone'},
    {id: 2, name: 'PC'},
]

// app.get('/users', (req, res) =>{
//     res.json(users)
// })

// app.get('/products', (req, res) =>{
//     res.json(products)
// })

app.use(express.json())

app.get('/users', (req, res) =>{
    const {name} = req.query;    
    const result = users.filter((u)=> u.name.toLowerCase().includes(name.toLowerCase()));
    res.json(result)
});

app.post('/users', (req, res) =>{
    const newUser = req.body;
    console.log(newUser);
    
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) =>{
    const {id} = req.params;
    const updatedUser = req.body;

    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex !== -1) {
        users[userIndex] = {
            ...users[userIndex],
            ...updatedUser
        }

        return res.status(201).json(users);
    }

    return res.status(404).json({message: "User not found"});
})

app.delete('/users/:id', (req, res) =>{
    const {id} = req.params;

    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex !== -1) {
        users.splice(userIndex, 1)
        return res.status(201).json(users);
    }

    return  res.status(404).json({message: "User not found"});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
const fs = require('fs');
const express = require('express')

const app = express();
const port = 3000;
const file = './data.json'

app.use(express.json())

// Helper function to read the file
function readFile() {
    try {
        const fileData = fs.readFileSync(file, "utf8");

        if (!fileData.trim()) {
            return JSON.parse([]);
        }

        return JSON.parse(fileData);
    } catch (err) {
        console.error("Error reading file:", err.message);

        return [];
    }
}


const writeFile = (data) =>{
    try {
        fs.writeFileSync(file, JSON.stringify(data, null, 1));
    } catch (err) {
        console.error("Error writing file:", err.message);
        throw new Error("Could not write to the file.");
    }
}

//Read route
app.get('/todo/', (req, res) => {
    try {
        const todos = readFile();
        console.log(todos);

        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Create route
app.post('/todo', (req, res) => {
    try {
        const newTodo = req.body;
        var existingTodos = readFile();        

        const highestId = existingTodos.length > 0 ? Math.max(...existingTodos.map(todo => todo.id)) : 0;

        newTodo.id = highestId + 1;

        existingTodos.push(newTodo);
        writeFile(existingTodos);

        res.status(201).json(newTodo);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "An error occurred while creating the todo." });
    }
});

//Update route
app.put('/todo/:id', (req, res) => {
    try {
        const {id} = req.params;
        const updatedTodo = req.body;
        var existingTodos = readFile();        

        const todoIndex = existingTodos.findIndex(todo => todo.id === parseInt(id));

        if (todoIndex !== -1) {
            existingTodos[todoIndex] = {
                ...existingTodos[todoIndex],
                ...updatedTodo
            }
            writeFile(existingTodos);
            return res.status(200).json(existingTodos);
        }
        return res.status(404).json({message: "Todo not found"});
        
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "An error occurred while updating the todo." });
    }
});

//Delete route
app.delete('/todo/:id', (req, res) => {
    res.json("Needs to be implemented")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
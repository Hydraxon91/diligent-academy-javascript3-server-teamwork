const prompt = require('prompt-sync')();
const baseUrl = 'http://localhost:3000/todos';


fetch(baseUrl)
    .then(res => res.json())
    .then((data) => {
        console.log('List of Todos:', data);
    })
    .catch((err) => {
        console.error('Error fetching todos:', err);
    });


fetch(baseUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "New Task", completed: false }),
})
    .then(res => res.json())
    .then((data) => {
        console.log('Todo created:', data);
    })
    .catch((err) => {
        console.error('Error creating todo:', err);
    });


fetch(`${baseUrl}/1`, { 
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "Updated Task", completed: true }),
})
    .then(res => res.json())
    .then((data) => {
        console.log('Todo updated:', data);
    })
    .catch((err) => {
        console.error('Error updating todo:', err);
    });


fetch(`${baseUrl}/1`, { 
    method: "DELETE",
})
    .then(res => res.json())
    .then((data) => {
        console.log('Todo deleted:', data);
    })
    .catch((err) => {
        console.error('Error deleting todo:', err);
    });

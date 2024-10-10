const prompt = require('prompt-sync')();
// const fetch = require('node-fetch');

const baseUrl = 'http://localhost:3000/todo';  


async function listTodos() {
    try {
        const response = await fetch(baseUrl);
        const todos = await response.json();
        console.log('Your todos:', todos);
    } catch (err) {
        console.error('Error fetching todos:', err);
    }
}

async function createTodo() {
    const title = prompt('Enter the title of your todo: ');
    const todo = { title, completed: false }; 

    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        const newTodo = await response.json();
        console.log('Todo created:', newTodo);
    } catch (err) {
        console.error('Error creating todo:', err);
    }
}

async function updateTodo() {
    const id = prompt('Enter the ID of the todo you want to update: ');
    const title = prompt('Enter the new title: ');
    const completed = prompt('Is it completed? (yes/no): ').toLowerCase() === 'yes';
    const todo = { title, completed };

    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        const updatedTodo = await response.json();
        console.log('Todo updated:', updatedTodo);
    } catch (err) {
        console.error('Error updating todo:', err);
    }
}


async function deleteTodo() {
    const id = prompt('Enter the ID of the todo you want to delete: ');

    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        console.log('Todo deleted:', result);
    } catch (err) {
        console.error('Error deleting todo:', err);
    }
}

async function main() {
    console.log('What would you like to do?');
    console.log('1. List Todos');
    console.log('2. Create a Todo');
    console.log('3. Update a Todo');
    console.log('4. Delete a Todo');
    
    const choice = prompt('Enter your choice (1-4): ');

    switch (choice) {
        case '1':
            await listTodos(fetch);
            break;
        case '2':
            await createTodo(fetch);
            break;
        case '3':
            await updateTodo(fetch);
            break;
        case '4':
            await deleteTodo(fetch);
            break;
        default:
            console.log('Invalid choice. Please select 1, 2, 3, or 4.');
            break;
    }
}

main();
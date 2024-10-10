const prompt = require('prompt-sync')();

// fetch('http://localhost:3000/users?name=kami')
//     .then(res=>res.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })

// fetch('http://localhost:3000/products')
//     .then(res=>res.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })

// fetch('http://localhost:3000/users', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({name: "Bob Marley"}),
// })
//     .then(res=>res.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })

// fetch('http://localhost:3000/users/1', {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({name: "Bob Marley"}),
// })
//     .then(res=>res.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })

fetch('http://localhost:3000/users/1', {
    method: "DELETE",
})
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    })
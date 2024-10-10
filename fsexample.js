//Fs example
const fs = require('fs');

const fileRead = JSON.parse(fs.readFileSync('data.json', "utf8"));

const writeData = {
    ...fileRead,
    key2: 'value2',
};
console.log(writeData);

fs.writeFileSync('data.json', JSON.stringify(writeData, null, 1))
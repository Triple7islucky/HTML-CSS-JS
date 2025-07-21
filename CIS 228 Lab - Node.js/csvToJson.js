const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

//checker for file path is provided
if (!filePath){
    console.error('Please provide the CSV file name');
    process.exit(1);
}

//Reads the CSV file asynchronously
fs.readFile(path.resolve(filePath), 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err.message);
    }

    const line = data.trim().split('\n');

    const headers = line[0].split(',');

    //parse reamining lines to objts
    const result = line.slice(1).map(line =>{
        const values = line.split(',');
        const obj = {};

        //
    headers.forEach((header, index) => {
        const rawValue=values[index];
        const num = Number(rawValue);
        obj[header] = isNaN(num) ? rawValue : num;
    });

    return obj;
    });

    console.log(JSON.stringify(result, null, 2));
});
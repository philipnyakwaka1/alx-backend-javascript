const fs = require('fs');
fs.readFile('./database.csv', 'utf8', (err, data) => {
    if (err) {
        throw new Error('Cannot load the database');
    } else {
        const myData = data.split('\n');
        let fields = {};
        for (let i = 1; i < myData.length; i++) {
            const student = myData[i].split(',');
            if (fields.hasOwnProperty(student.slice(-1))) {
                fields[student.slice(-1)].push(student[0]);
            } else {
                fields[student.slice(-1)] = [student[0]];
            }
        }
        console.log(fields);
    }
})
const fs = require('fs');
/**
 * Counts the number of students in a CSV file and groups them by their last name.
 *
 * @param {string} _path - The path to the CSV file.
 * @throws {Error} If the file cannot be loaded.
 * @return {void} Prints the number of students and the number
 * of students in each last name group to the console.
 */
function countStudents(_path) {
  try {
    const data = fs.readFileSync(_path, 'utf8');
    const myData = data.split('\n');
    const fields = {};
    for (let i = 1; i < myData.length; i += 1) {
      const student = myData[i].split(',');
      if (Object.prototype.hasOwnProperty.call(fields, student.slice(-1))) {
        fields[student.slice(-1)].push(student[0]);
      } else {
        fields[student.slice(-1)] = [student[0]];
      }
    }
    console.log(`Number of students: ${myData.length - 1}`);
    for (const [key, value] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

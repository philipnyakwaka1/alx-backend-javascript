import createEmployeesObject from './11-createEmployeesObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
}; 
console.log(employees)
const keys = Object.keys(employees)
console.log(keys.length)

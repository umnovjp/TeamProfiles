class Employee {constructor(name, id, email)
{this.name = name;
this.id = id;
this.email = email;}
getName() {return this.name}
getId(){return this.id}
getEmail(){return this.email}
getRole(){return 'Employee'}}

const buildDataArray = require('./index34.js');
buildDataArray(dataArray => 
console.log(dataArray[0]) + ' dataArray');

const name0 = dataArray[0].managerName; 
const id0 = dataArray[0].managerID; 
const email0 = dataArray[0].managerEmail; 

const name1 = dataArray[1].name0; 
const id1 = dataArray[1].id0; 
const email1 = dataArray[1].email0; 

const name2 = dataArray[2].name0; 
const id2 = dataArray[2].id0; 
const email2 = dataArray[2].email0; 

const newEmployee0 = new Employee(name0, id0, email0);
const newEmployee1 = new Employee(name1, id1, email1);
const newEmployee2 = new Employee(name2, id2, email2);

module.exports = Employee;
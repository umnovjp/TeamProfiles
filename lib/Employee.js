class Employee {
     constructor(name, id, email) {
         this.name = name;
         this.id = id;
         this.email = email;
     }
    getName(i) { const name = data[i].name0; }
    getId(i) { const id = data[i].id0; }
    getEmail(i) { const email = data[i].email0; }
    getRole(i) { const role = 'Employee' }
    
 }
const buildDataArray = (data) => { // this const is not used anywhere 
    console.log(data);
    console.log('employee file to show that data is transferred');
}
const employee = new Employee ('Alex', 12, 'abc@nowhere.com');
console.log(employee);
module.exports = {buildDataArray, employee};
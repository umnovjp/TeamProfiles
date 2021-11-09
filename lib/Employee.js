class  Employee  {
     constructor(name, id, email) {
         this.name = name;
         this.id = id;
         this.email = email;
     }
    getName() {return this.name}
    getId() {return this.id}
    getEmail() {return this.email}
    getRole() {return 'Employee'}
    
 }
const buildDataArray = (data) => { // this const is not used anywhere 
    console.log(data);
    console.log('employee file to show that data is transferred');
}
const employee = new Employee ('Alex', 12, 'abc@nowhere.com');
console.log(employee);
module.exports = Employee;
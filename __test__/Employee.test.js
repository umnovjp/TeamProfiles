const Employee = require('../Lib/Employee')
describe('Employee', () => {
    it('should create new Employee with name, id, email provided valid arguments', () => {
        const employee = new Employee()
        expect(typeof(employee)).toEqual('object')
    });
})
describe('Employee', () => {
    it('returns Employee name', () => {
        const name = 'John';
        const employee = new Employee(name);
        expect(employee.name).toEqual(name);
    });
})
describe('Employee', () => {
    it('should return Employee email', () => {
        const id = 12;
        const result = new Employee('John', id);     
        expect(result.id).toEqual(id);
    });
})
describe('Employee', () => {
    it('should return Employee email', () => {
        const email = 'abc@nowhere.com';
        const result = new Employee('John', 12, email);  
        expect(result.email).toEqual(email);
    });
})
describe('Employee', () => {
    it('should return Employee role', () => {
        const role = 'Employee';
        const result = new Employee('John', 1, 'abc@nowhere.com');     
        expect(result.getRole()).toEqual(role)
    });
})

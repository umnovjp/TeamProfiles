const Employee = require('../lib/Employee');
describe ('Employee', () => {
    it ('should create new Employee with name, id, email provided valid arguments', () => {
        const employee = new Employee ('John', 12, 'qwerty@yahoo.com0');
        expect(employee.name).toEqual('John');
        expect(employee.id).toEqual(12);
        expect(employee.email).toEqual('qwert@yahoo.com');
    });
describe ('returns Employee name', () => {
    it ('should return Employee name', () => {
        const employeeIndex = 0;
        const result = new Employee().getName(employeeIndex);
        expect(result).toEqual(getName(employeeIndex).name0);
    });
});
describe ('returns Employee id', () => {
    it ('should return Employee id', () => {
        const employeeIndex = 0;
        const result = new Employee().getId(employeeIndex);
        expect(result).toEqual(getId(employeeIndex).id0);
    });
});
describe ('returns Employee email', () => {
    it ('should return Employee email', () => {
        const employeeIndex = 0;
        const result = new Employee().getEmail(employeeIndex);
        expect(result).toEqual(getEmail(employeeIndex).email0);
    });
});
describe ('returns Employee role', () => {
    it ('should return Employee role', () => {
        const employeeIndex = 0;
        const result = new Employee().getRole(employeeIndex);
        expect(result).toEqual('Employee');
    });
});
});
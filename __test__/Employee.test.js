const Employee = require('../lib/Employee');
describe ('Employee', () => {
    it ('should create new Employee with name, id, email provided valid arguments', () => {
        const employee = new Employee ('John', 12, 'qwerty@yahoo.com0');
        expect(employee.name).toEqual('John');
        expect(employee.id).toEqual(12);
        expect(employee.email).toEqual('qwerty@yahoo.com');
    });
describe ('returns Employee name', () => {
    it ('should return Employee name', () => {
        const result = new Employee().getName();
        expect(result).toEqual(getName());
    });
});
describe ('returns Employee id', () => {
    it ('should return Employee id', () => {
        const result = new Employee().getId();
        expect(result).toEqual(getId());
    });
});
describe ('returns Employee email', () => {
    it ('should return Employee email', () => {
        const result = new Employee().getEmail();
        expect(result).toEqual(getEmail());
    });
});
describe ('returns Employee role', () => {
    it ('should return Employee role', () => {
        const result = new Employee().getRole();
        expect(result).toEqual('Employee');
    });
});
});
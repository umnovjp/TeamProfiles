const Manager = require('../lib/Manager');
describe ('manager', () => {
    it ('should create new Manager extending Employee class with officeNumber pointing to his office Number', () => {
        const manager = new Manager (12345);
        expect(manager.officeNumber).toEqual(12345);
    });
describe ('returns Manager Office number', () => {
    it ('should return manager office number', () => {
        const employeeIndex = 0;
        const result = new Manager().officeNumber(employeeIndex);
        expect(result).toEqual(officeNumber(employeeIndex).school);
    });
});
describe ('returns Employee role', () => {
    it ('should return Employee role', () => {
        const employeeIndex = 0;
        const result = new Manager().getRole(employeeIndex);
        expect(result).toEqual('Manager');
    });
});
});
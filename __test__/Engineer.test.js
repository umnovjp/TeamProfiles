const Engineer = require('../lib/Engineer');
describe ('Engineer', () => {
    it ('should create new Engineer extending Employee class with getGithub pointing to his github page', () => {
        const engineer = new Engineer ('umnovjp');
        expect(engineer.github).toEqual('umnovjp');
    });
describe ('returns Engineer github', () => {
    it ('should return Engineer github', () => {
        const employeeIndex = 1;
        const result = new Engineer().getGithub(employeeIndex);
        expect(result).toEqual(getName(employeeIndex).github);
    });
});
describe ('returns Employee role', () => {
    it ('should return Employee role', () => {
        const employeeIndex = 0;
        const result = new Engineer().getRole(employeeIndex);
        expect(result).toEqual('Engineer');
    });
});
});
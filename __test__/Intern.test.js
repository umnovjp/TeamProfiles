const Intern = require('../lib/Intern');
describe ('Intern', () => {
    it ('should create new Intern extending Employee class with school pointing to his school', () => {
        const intern = new Intern ('Harvard');
        expect(intern.school).toEqual('Harvard');
    });
describe ('returns Intern school', () => {
    it ('should return Intern school', () => {
        const employeeIndex = 2;
        const result = new Intern().getSchool(employeeIndex);
        expect(result).toEqual(getSchool(employeeIndex).school);
    });
});
describe ('returns Employee role', () => {
    it ('should return Employee role', () => {
        const employeeIndex = 2;
        const result = new Intern().getRole(employeeIndex);
        expect(result).toEqual('Intern');
    });
});
});
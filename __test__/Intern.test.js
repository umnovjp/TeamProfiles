const { Intern } = require('../lib/Intern');
describe ('Intern', () => {
    it ('should create new Intern extending Employee class with school pointing to his school', () => {
        const intern = new Intern ('Harvard');
        expect(intern.school).toEqual('Harvard');
    });
describe ('returns Intern school', () => {
    it ('should return Intern school', () => {
        const result = new Intern().getSchool();
        expect(result).toEqual(getSchool());
    });
});
describe ('returns Employee role', () => {
    it ('should return Employee role', () => {
        const result = new Intern().getRole();
        expect(result).toEqual('Intern');
    });
});
});